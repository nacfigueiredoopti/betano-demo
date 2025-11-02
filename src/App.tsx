import React, { useState } from 'react';
import { OptimizelyProvider, createInstance } from '@optimizely/react-sdk';
import './App.css';
import HomePage from './components/HomePage';
import DepositPage from './components/DepositPage';

const optimizelyClient = createInstance({
  sdkKey: 'PyeuxTPfaBgAB4g3etHPC',
});

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'deposit'>('home');
  const [userId] = useState<string>(`user_${Math.random().toString(36).substr(2, 9)}`);

  return (
    <OptimizelyProvider
      optimizely={optimizelyClient}
      user={{
        id: userId,
      }}
      timeout={500}
    >
      <div className="App">
        {currentPage === 'home' ? (
          <HomePage onNavigateToDeposit={() => setCurrentPage('deposit')} userId={userId} />
        ) : (
          <DepositPage onNavigateToHome={() => setCurrentPage('home')} userId={userId} />
        )}
      </div>
    </OptimizelyProvider>
  );
}

export default App;
