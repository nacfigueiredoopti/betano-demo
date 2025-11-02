import React, { useState } from 'react';
import { OptimizelyContext } from '@optimizely/react-sdk';
import './DepositPage.css';

interface DepositPageProps {
  onNavigateToHome: () => void;
  userId: string;
}

const DepositPage: React.FC<DepositPageProps> = ({ onNavigateToHome, userId }) => {
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { optimizely } = React.useContext(OptimizelyContext);

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate deposit processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);

      // Track deposit completion event in Optimizely using shared client
      if (optimizely) {
        optimizely.track('deposit_completed', userId, {
          amount: parseFloat(amount),
          payment_method: paymentMethod,
        });
        console.log('📊 Optimizely Event Tracked: deposit_completed', {
          userId,
          amount: parseFloat(amount),
          paymentMethod,
        });
      }

      // Redirect back to home after 3 seconds
      setTimeout(() => {
        onNavigateToHome();
      }, 3000);
    }, 2000);
  };

  if (isComplete) {
    return (
      <div className="deposit-page">
        <div className="deposit-container">
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Deposit Successful!</h2>
            <p>Your account has been credited with ${amount}</p>
            <p className="redirect-message">Redirecting to homepage...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="deposit-page">
      <header className="header">
        <div className="header-container">
          <div className="logo" onClick={onNavigateToHome} style={{ cursor: 'pointer' }}>
            BETANO
          </div>
          <button className="btn-back" onClick={onNavigateToHome}>
            ← Back to Home
          </button>
        </div>
      </header>

      <div className="deposit-container">
        <div className="deposit-card">
          <h1>Quick Deposit</h1>
          <p className="deposit-subtitle">Fund your account securely and start betting</p>

          <form onSubmit={handleDeposit}>
            <div className="form-group">
              <label htmlFor="amount">Deposit Amount</label>
              <div className="amount-input-container">
                <span className="currency-symbol">$</span>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  min="10"
                  max="10000"
                  step="0.01"
                  required
                  disabled={isProcessing}
                />
              </div>
              <div className="quick-amounts">
                <button
                  type="button"
                  className="quick-amount-btn"
                  onClick={() => setAmount('25')}
                  disabled={isProcessing}
                >
                  $25
                </button>
                <button
                  type="button"
                  className="quick-amount-btn"
                  onClick={() => setAmount('50')}
                  disabled={isProcessing}
                >
                  $50
                </button>
                <button
                  type="button"
                  className="quick-amount-btn"
                  onClick={() => setAmount('100')}
                  disabled={isProcessing}
                >
                  $100
                </button>
                <button
                  type="button"
                  className="quick-amount-btn"
                  onClick={() => setAmount('250')}
                  disabled={isProcessing}
                >
                  $250
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="payment-method">Payment Method</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                disabled={isProcessing}
              >
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="crypto">Cryptocurrency</option>
              </select>
            </div>

            <div className="payment-info">
              <div className="info-item">
                <span className="info-icon">🔒</span>
                <span>Secure & Encrypted</span>
              </div>
              <div className="info-item">
                <span className="info-icon">⚡</span>
                <span>Instant Processing</span>
              </div>
              <div className="info-item">
                <span className="info-icon">✓</span>
                <span>No Hidden Fees</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn-submit-deposit"
              disabled={isProcessing || !amount || parseFloat(amount) < 10}
            >
              {isProcessing ? 'Processing...' : `Deposit $${amount || '0.00'}`}
            </button>
          </form>

          <div className="deposit-footer">
            <p>Minimum deposit: $10 | Maximum deposit: $10,000</p>
            <p className="responsible-gaming">
              🔞 18+ Only. Please gamble responsibly.
            </p>
          </div>
        </div>

        <div className="deposit-sidebar">
          <div className="info-card">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✓ Instant deposits</li>
              <li>✓ Secure payments</li>
              <li>✓ 24/7 support</li>
              <li>✓ Multiple payment options</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Deposit Limits</h3>
            <p>Set your own limits to stay in control of your spending.</p>
            <a href="#limits" className="link">Manage Limits</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositPage;
