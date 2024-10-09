import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import GlobalLayout from './Layout/GlobalLayout';

// Lazy load the page components
const HomePage = lazy(() => import('./Pages/HomePage'));
const AboutPage = lazy(() => import('./Pages/AboutPage'));
const ServicesPage = lazy(() => import('./Pages/ServicesPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const Search = lazy(() => import('./Components/Search'));
const NavMenu = lazy(() => import('./Components/NavMenu'));

function App() {
  const [currentPage, setCurrentPage] = useState('search');

  // Debug log for current page
  useEffect(() => {
    console.log('Current Page:', currentPage);
  }, [currentPage]);

  // Redirect to Search page on initial mount
  useEffect(() => {
    setCurrentPage('search');
  }, []);

  return (
    <GlobalLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <NavMenu setCurrentPage={setCurrentPage} />
        <Routes>
          {/* Update routes to match navigation links */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<Search />} />
          {/* Redirect to Search on initial load */}
          <Route path="/" element={<Navigate to="/search" replace />} />
          {/* Wildcard route for handling undefined paths */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </GlobalLayout>
  );
}

export default App;