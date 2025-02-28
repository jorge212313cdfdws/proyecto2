import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>FitTrack</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/workouts">Workouts</Link>
      </nav>
    </header>
  );
}

export default Header;
