import React from 'react';
import './Servicios.scss';
import mecanica from '..//..//assets/mecanica.png'
import electricidad from '../../assets/electronica.png'
import mantenimiento from '..//..//assets/mantenimiento.png'



const pcImages = [
  {
    id: 1,
    src: mecanica,
    alt: 'mecanica',
  },
  {
    id: 2,
    src: electricidad,
    alt: 'electricidad',
  },
  {
    id: 3,
    src: mantenimiento,
    alt: 'mantenimiento',
  },
];

function Servicios() {
  return (
    <div className="nuestros_servicios">
      <div className='titulo__servicios'>
        <h1> Nuestros servicios</h1>
      </div>

      <div className="imagenes__servicios">
        {pcImages.map((image) => (
          <div className="servicios__item" key={image.id}>
            
            <img src={image.src} alt={image.alt} className="servicios__imagenes" />
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicios;
