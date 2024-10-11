import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { dropdownVariants, itemVariants } from '../Data/motionVariants';

const FilterDropdown = ({ isOpen, toggle, onSelect }) => {
  // Array of filter options
  const filterOptions = ['Best Seller', 'High-End', 'Budget-Watches'];

  return (
    <div className="filter-container">
      {/* Filter toggle button */}
      <button className="filter-toggle" onClick={toggle}>
        Filter <FaChevronDown />
      </button>

      {/* Animated dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="dropdown-menu"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filterOptions.map((option, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                onClick={() => onSelect(option)}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterDropdown;