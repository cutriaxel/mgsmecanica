import React from 'react';
import './Slider.scss';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const Slider = () => {
  return (
    <>
  <div className='cart__contenedor'>
      <DirectionsCarIcon style={{ color: '#0BD8A2', fontSize: '48px' }} />
    </div>
    <div className='contenedor__titulo'>
      <div className='slider__titulo'>
      <h2>MGS MECANICA</h2>
      </div>
      <div className='slider__parrafo'>
        <h4 className="fade-in-left">Servicio exclusivo de mantenimiento y reparación de flotas de vehículos de todas las marcas.</h4>
      </div>
    </div>
  
    <motion.div className='slider-container'>
      <motion.div className='slider' drag='x' dragConstraints={{ right: 200, left: -1000 }}>
        
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-03.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-08.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-07.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-06.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-02.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-01.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/08/marca-05.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/09/m2.jpg" alt="Imagen 1" />
          </motion.div>
          <motion.div className='item' >
          <img src="https://www.osvaldogiro.com.ar/wp-content/uploads/2018/09/m1.jpg" alt="Imagen 1" />
          </motion.div>
        
      </motion.div>
    </motion.div>
    </>
  );
};

export default Slider;