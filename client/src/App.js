import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import GlobalLayout from './Layout/GlobalLayout';
import NavMenu from './Layout/NavMenu'; // Import NavMenu component

const HomePage = lazy(() => import('./Pages/HomePage'));
const AboutPage = lazy(() => import('./Pages/AboutPage'));
const ServicesPage = lazy(() => import('./Pages/ServicesPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const Search = lazy(() => import('./Components/Search')); // Moved Search to Pages

function App() {
  const [currentPage, setCurrentPage] = useState('search');

  useEffect(() => {
    console.log('Current Page:', currentPage);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage('search');
  }, []);

  return (
    <GlobalLayout>
      {/* Pass setCurrentPage to NavMenu */}
      <NavMenu setCurrentPage={setCurrentPage} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </GlobalLayout>
  );
}

export default App;