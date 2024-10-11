import React, { useState } from 'react';
import '../css/heritagePage.css';
import imageGrid from '../Asset/backgroundImages/heritage/horage.webp';
import { FaSearch, FaTimes } from 'react-icons/fa';
import FilterDropdown from '../Layout/FilterDropdown';
import watches from '../Data/watchData';

function HeritagePage() {
  // State for search visibility and dropdown
  const [showSearch, setShowSearch] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handler for dropdown selection
  const handleDropdownSelection = (item) => {
    console.log(item);
    setShowDropdown(false);
  };

  return (
    <div className='mens-heritage'>
      {/* Search toggle icon */}
      <div className="search-toggle" onClick={() => setShowSearch(true)}>
        <FaSearch size={24} />
      </div>

      {/* Conditional rendering of search bar */}
      {showSearch && (
        <div className='search-grid'>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search For A Product." className="search-input" />
          <FaTimes className="close-icon" onClick={() => setShowSearch(false)} />
        </div>
        </div>
      )}

      {/* Main image grid */}
      <div className="image-grid">
        <img src={imageGrid} alt="Classic Background" className="grid-image" />
        <h3 className='about-heritage'>A rich history spanning more than 150 years
          provides a wealth of inspiration.
          The 'Time Square' Heritage collection tels stories of the past in a
          contemporary style, appealing both to mordern tastes as well as fashioned collectors.
        </h3>
      </div>  

<div className='product-section'>
      {/* Filter dropdown component */}
      <FilterDropdown
      className='filter-container'
        isOpen={showDropdown}
        toggle={() => setShowDropdown(!showDropdown)}
        onSelect={handleDropdownSelection}
      />

      {/* Watch grid  */}
      <div className="watch-grid">
        {watches.map((watch) => (
          <div key={watch.id} className="watch-item">
            <img src={watch.image} alt={watch.specification} className="watch-image" />
            <p className="watch-spec">{watch.specification}</p>
          </div> 
        ))}
      </div>
      </div>
    </div>
  );
}

export default HeritagePage;