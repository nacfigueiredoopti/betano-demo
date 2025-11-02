import React, { useEffect } from 'react';
import { useDecision, OptimizelyContext } from '@optimizely/react-sdk';
import './QuickDepositButton.css';

interface QuickDepositButtonProps {
  onNavigateToDeposit: () => void;
  userId: string;
}

const QuickDepositButton: React.FC<QuickDepositButtonProps> = ({ onNavigateToDeposit, userId }) => {
  // Use Optimizely feature flag for button variation with auto-update
  const [decision] = useDecision('quick_deposit_button_variation', { autoUpdate: true });
  const { optimizely } = React.useContext(OptimizelyContext);

  const variation = decision.variationKey || 'control';

  // Log when variation changes (for debugging)
  useEffect(() => {
    console.log('🎨 Button variation updated:', variation);
  }, [variation]);

  const handleClick = () => {
    // Track button click event in Optimizely using shared client
    if (optimizely) {
      optimizely.track('quick_deposit_clicked', userId);
      console.log('📊 Optimizely Event Tracked: quick_deposit_clicked', { userId, variation });
    }

    onNavigateToDeposit();
  };

  const getButtonIcon = () => {
    switch (variation) {
      case 'green_arrow':
        return '➜'; // Green arrow
      case 'orange_arrow':
        return '➜'; // Orange arrow
      case 'control':
      default:
        return '✕'; // Cross icon
    }
  };

  const getButtonClass = () => {
    return `quick-deposit-btn variation-${variation}`;
  };

  return (
    <div className="quick-deposit-container">
      <button
        className={getButtonClass()}
        onClick={handleClick}
        aria-label="Quick Deposit"
      >
        <span className="btn-icon">{getButtonIcon()}</span>
        <span className="btn-text">Quick Deposit</span>
      </button>
    </div>
  );
};

export default QuickDepositButton;
