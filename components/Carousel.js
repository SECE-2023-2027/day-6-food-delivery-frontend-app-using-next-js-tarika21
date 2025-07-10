'use client';
import React, { useRef } from 'react';

const Carousel = ({ images }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2>Popular Dishes</h2>
        <div className="carousel-buttons">
          <button onClick={scrollLeft}>&larr;</button>
          <button onClick={scrollRight}>&rarr;</button>
        </div>
      </div>

      <div className="carousel" ref={scrollRef}>
        <div className="carousel-track">
          {images.map((img, index) => (
            <div key={index} className="carousel-slide">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
