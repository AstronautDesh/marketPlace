// src/components/Carousel.js

import React, { useState, useEffect } from 'react';
import { carouselData } from '../Data/carouselData';
import '../css/carousel-data.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="quote-container">
            <p className="quote">{slide.quote}</p>
            <p className="author">- {slide.author}</p>
          </div>
        </div>
      ))}
      <div className="carousel-dots">
        {carouselData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
