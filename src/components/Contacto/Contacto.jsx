import React from 'react';
import './Contacto.scss';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from 'emailjs-com';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura los IDs del servicio, plantilla y usuario de EmailJS
    const serviceID = 'service_4kqdpe7';
    const templateID = 'template_arctyif';
    const userID = 'iPWSQWPfSaL4jN89d';

    // Crea un objeto con los datos del formulario
    const formData = {
      nombre: e.target.nombre.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      asunto: e.target.asunto.value,
      mensaje: e.target.mensaje.value,
    };

    // Envía los datos del formulario a través de EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        console.log('Formulario enviado correctamente', result.text);
      })
      .catch((error) => {
        console.error('Error al enviar el formulario', error);
      });

    // Limpia el formulario después de enviarlo
    e.target.reset();
  };

  return (
    <>
      <div className='titulo-contacto'>
        <h1> Contacto</h1>
      </div>
      <div className="contacto-container">
        <div className="left-container">
          <div>
            <p style={{ fontSize: '17px' }}><RoomIcon style={{ color: '#0BD8A2', fontSize: '17px' }} /> Charcas 1996. Buenos Aires, Lomas del mirador</p>
            <p style={{ fontSize: '17px' }}><PhoneIcon style={{ color: '#0BD8A2', fontSize: '17px' }} /> 113267-6682</p>
            <p style={{ fontSize: '17px' }}><EmailIcon style={{ color: '#0BD8A2', fontSize: '17px' }} /> MGSMECANICA@GMAIL.COM</p>
          </div>
        </div>
        <div className="right-container">
          <form style={{ width: '500px' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="nombre" name="nombre" placeholder='Nombre' required />
            </div>
            <div className="form-group">
              <input type="email" id="correo" name="correo" placeholder='Correo Electrónico' required />
            </div>
            <div className="form-group">
              <input type="tel" id="telefono" name="telefono" placeholder='Teléfono' required />
            </div>
            <div className="form-group">
              <input type="text" id="asunto" name="asunto" placeholder='Asunto' required />
            </div>
            <div className="form-group">
              <textarea id="mensaje" name="mensaje" rows="4" placeholder='Mensaje' required />
            </div>
            <div className='btn-form'>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;