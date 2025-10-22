import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Welcome to my React app — Navbar branch!</p>
      </main>
    </div>
  );
}

export default App;
