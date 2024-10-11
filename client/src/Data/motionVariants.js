// Import necessary functions from Framer Motion
import { stagger } from "framer-motion";

// Define animation variants for the dropdown container
export const dropdownVariants = {
  // Initial state of the dropdown (hidden)
  hidden: { opacity: 0, y: -10 },
  // Visible state of the dropdown
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      // Use a spring animation for a bouncy effect
      type: "spring",
      stiffness: 300,
      damping: 24,
      // Stagger the animation of child elements
      staggerChildren: 0.07,
      delayChildren: 0.2
    }
  }
};

// Define animation variants for individual dropdown items
export const itemVariants = {
  // Initial state of each item (hidden and slightly offset)
  hidden: { opacity: 0, y: 20 },
  // Visible state of each item
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      // Use a spring animation for a bouncy effect
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

// Export a stagger effect for use in parent components
export const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });