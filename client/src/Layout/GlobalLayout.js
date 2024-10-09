import React from 'react';
import { Link } from 'react-router-dom';
import NavMenu from '../Components/NavMenu';
import '../css/globalLayout.css'; // Import layout-specific styles

const GlobalLayout = ({ children }) => {
  return (
    <div className="global-layout">
      <header className="App-header">
        <Link to="/search">Time Square.</Link>
      </header>
      <NavMenu />
      <main>{children}</main> {/* Render the page content here */}
    </div>
  );
};

export default GlobalLayout;
