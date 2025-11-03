import React, { useEffect } from 'react';
import { useDecision, OptimizelyContext } from '@optimizely/react-sdk';
import './QuickDepositButton.css';

interface QuickDepositButtonProps {
  onNavigateToDeposit: () => void;
  userId: string;
  inline?: boolean; // For inline positioning in hero section
}

const QuickDepositButton: React.FC<QuickDepositButtonProps> = ({ onNavigateToDeposit, userId, inline = false }) => {
  // Use Optimizely feature flag for button variation with auto-update
  const [decision] = useDecision('quick_deposit_button_variation', { autoUpdate: true });
  const { optimizely } = React.useContext(OptimizelyContext);

  const variation = decision.variationKey || 'control';
  const variables = decision.variables || {};

  // Get feature flag variables with defaults
  const headline = (variables.headline as string) || 'Quick Deposit';
  const icon = (variables.icon as string) || 'plus';
  const buttonColor = (variables.button_color as string) || 'control';
  const buttonPosition = (variables.button_position as string) || 'floating';

  // Log when variation changes (for debugging)
  useEffect(() => {
    console.log('🎨 Button variation updated:', variation);
    console.log('📊 Feature Variables:', { headline, icon, buttonColor, buttonPosition });
  }, [variation, headline, icon, buttonColor, buttonPosition]);

  const handleClick = () => {
    // Track button click event in Optimizely using shared client
    if (optimizely) {
      optimizely.track('quick_deposit_clicked', userId);
      console.log('📊 Optimizely Event Tracked: quick_deposit_clicked', {
        userId,
        variation,
        headline,
        icon,
        buttonColor,
        buttonPosition
      });
    }

    onNavigateToDeposit();
  };

  const getButtonIcon = () => {
    // Use the icon variable from Optimizely
    if (icon === 'green_arrow') {
      return '➜'; // Green arrow
    } else if (icon === 'plus') {
      return '+'; // Plus icon
    }
    return '+'; // Default to plus
  };

  const getButtonClass = () => {
    // Use button_color variable for styling
    return `quick-deposit-btn button-color-${buttonColor}`;
  };

  const getContainerClass = () => {
    // Use button_position variable to determine positioning
    if (buttonPosition === 'inline' || variation === 'inline_below_join' || inline) {
      return 'quick-deposit-container inline';
    }
    return 'quick-deposit-container';
  };

  return (
    <div className={getContainerClass()}>
      <button
        className={getButtonClass()}
        onClick={handleClick}
        aria-label={headline}
      >
        <span className="btn-icon">{getButtonIcon()}</span>
        <span className="btn-text">{headline}</span>
      </button>
    </div>
  );
};

export default QuickDepositButton;
