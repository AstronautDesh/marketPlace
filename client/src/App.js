import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import GlobalLayout from './Layout/GlobalLayout';
import NavMenu from './Layout/NavMenu'; // Import NavMenu component

const HomePage = lazy(() => import('./Pages/HomePage'));
const ServicesPage = lazy(() => import('./Pages/ServicesPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const Search = lazy(() => import('./Components/Search'));
const ClassicPage = lazy(() => import('./Components/ClassicPage')); // New page for shirts
const HeritagePage = lazy(() => import('./Components/HeritagePage')); // New page for pants
const ConsultingPage = lazy(() => import('./Components/ConsultingPage')); // New page for consulting
const DesignPage = lazy(() => import('./Components/DesignPage')); // New page for design

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
          <Route path="/mens/classic" element={<ClassicPage />} /> {/* Route for Men's Classic Page */}
          <Route path="/mens/heritage" element={<HeritagePage />} /> {/* Route for Men's Heritage Page */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/consulting" element={<ConsultingPage />} /> {/* Route for consulting */}
          <Route path="/services/design" element={<DesignPage />} /> {/* Route for design */}
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
