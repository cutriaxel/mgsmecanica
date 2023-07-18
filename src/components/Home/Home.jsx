import React from 'react';
import './Home.scss';
import images from '../../helpers/image'; 
import Carousel from '../Carousel/Carousel';
import Servicios from '../Servicios/Servicios';
import Swiper from '../Swiper/Slider';



function Home() {
  return (
    <>
    <Carousel images={images} intervalTime={3000} />
     <Servicios />
     <Swiper />
     
    </>
  );
}

export default Home;