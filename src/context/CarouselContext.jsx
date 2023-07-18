import React, { createContext, useState, useEffect } from 'react';
import images from '../helpers/image';

const CarouselContext = createContext();

const CarouselProvider = ({ children, intervalTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, intervalTime]);

  return (
    <CarouselContext.Provider value={currentImageIndex}>
      {children}
    </CarouselContext.Provider>
  );
};

export { CarouselContext, CarouselProvider };
