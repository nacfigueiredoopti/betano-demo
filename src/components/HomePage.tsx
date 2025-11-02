import React from 'react';
import './HomePage.css';
import QuickDepositButton from './QuickDepositButton';

interface HomePageProps {
  onNavigateToDeposit: () => void;
  userId: string;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigateToDeposit, userId }) => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">BETANO</div>
          <nav className="nav">
            <a href="#sports">Sports</a>
            <a href="#live">Live Betting</a>
            <a href="#casino">Casino</a>
            <a href="#promotions">Promotions</a>
          </nav>
          <div className="header-actions">
            <button className="btn-login">Login</button>
            <button className="btn-register">Register</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sports Betting</h1>
          <p>Bet on your favorite sports with the best odds</p>
          <div className="hero-cta">
            <button className="btn-primary">Join Now</button>
            <button className="btn-secondary">Explore Sports</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="sports-illustration">⚽ 🏀 🎾 🏈</div>
        </div>
      </section>

      {/* Quick Deposit CTA */}
      <QuickDepositButton onNavigateToDeposit={onNavigateToDeposit} userId={userId} />

      {/* Sports Grid */}
      <section className="sports-grid">
        <h2>Popular Sports</h2>
        <div className="grid">
          <div className="sport-card">
            <div className="sport-icon">⚽</div>
            <h3>Football</h3>
            <p>250+ matches</p>
          </div>
          <div className="sport-card">
            <div className="sport-icon">🏀</div>
            <h3>Basketball</h3>
            <p>180+ matches</p>
          </div>
          <div className="sport-card">
            <div className="sport-icon">🎾</div>
            <h3>Tennis</h3>
            <p>120+ matches</p>
          </div>
          <div className="sport-card">
            <div className="sport-icon">🏈</div>
            <h3>American Football</h3>
            <p>45+ matches</p>
          </div>
          <div className="sport-card">
            <div className="sport-icon">🏏</div>
            <h3>Cricket</h3>
            <p>90+ matches</p>
          </div>
          <div className="sport-card">
            <div className="sport-icon">🎮</div>
            <h3>Esports</h3>
            <p>200+ events</p>
          </div>
        </div>
      </section>

      {/* Live Matches */}
      <section className="live-matches">
        <h2>🔴 Live Now</h2>
        <div className="matches-list">
          <div className="match-card">
            <div className="teams">
              <span className="team">Manchester United</span>
              <span className="score">2 - 1</span>
              <span className="team">Liverpool</span>
            </div>
            <div className="match-time">67' ⚽ Live</div>
            <button className="btn-bet">Bet Now</button>
          </div>
          <div className="match-card">
            <div className="teams">
              <span className="team">Lakers</span>
              <span className="score">98 - 94</span>
              <span className="team">Warriors</span>
            </div>
            <div className="match-time">Q3 8:45 🏀 Live</div>
            <button className="btn-bet">Bet Now</button>
          </div>
          <div className="match-card">
            <div className="teams">
              <span className="team">Federer</span>
              <span className="score">6-4, 3-2</span>
              <span className="team">Nadal</span>
            </div>
            <div className="match-time">Set 2 🎾 Live</div>
            <button className="btn-bet">Bet Now</button>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="promotions">
        <h2>Special Offers</h2>
        <div className="promo-grid">
          <div className="promo-card promo-primary">
            <h3>Welcome Bonus</h3>
            <p className="promo-value">Up to $100</p>
            <p>For new customers</p>
            <button className="btn-promo">Claim Now</button>
          </div>
          <div className="promo-card">
            <h3>Acca Boost</h3>
            <p className="promo-value">5%</p>
            <p>Extra on accumulators</p>
            <button className="btn-promo">Learn More</button>
          </div>
          <div className="promo-card">
            <h3>Cashback</h3>
            <p className="promo-value">10%</p>
            <p>On casino losses</p>
            <button className="btn-promo">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <a href="#about">About Betano</a>
            <a href="#responsible">Responsible Gaming</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Betano Demo. For demonstration purposes only. 18+ Gamble Responsibly.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
