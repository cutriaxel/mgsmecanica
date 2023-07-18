import React from 'react';
import { CarouselContext, CarouselProvider } from '../../context/CarouselContext';
import images from '../../helpers/image';
import './Carousel.scss';

const Carousel = () => {
  return (
    <CarouselProvider intervalTime={3000}>
      <CarouselContent />
    </CarouselProvider>
  );
};

const CarouselContent = () => {
  const currentImageIndex = React.useContext(CarouselContext);

  return (
    <>
      <div className="carousel">
        <div className="carousel-overlay">
          <div>
            <h2>SERVICIOS MECÁNICOS DE EXCELENCIA PARA TODAS LAS MARCAS</h2>
          </div>
        </div>
        <img src={images[currentImageIndex]} alt="Carousel Image" />
      </div>
    </>
  );
};

export default Carousel;