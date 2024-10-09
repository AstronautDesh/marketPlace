import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css'; // Separate styles for header if needed

const AppHeader = () => {
  return (
    <header className="App-header">
      <Link to="/search">Time Square.</Link>
    </header>
  );
};

export default AppHeader;
