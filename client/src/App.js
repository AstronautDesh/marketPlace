import React, { useState } from 'react';
import './App.css';
import Search from './Components/Search';
import NavMenu from './Components/NavMenu';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('search');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Search />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        Time Square.
      </header>
      <NavMenu setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;