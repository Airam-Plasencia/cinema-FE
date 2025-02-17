import React from 'react';
import icon from '../img/25231.png'; 
import icon2 from '../img/cinema-30.jpg';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
      <img src={icon2} alt="Icono de Airam Plasencia" style={{ width: '650px', height: '450px', marginBottom: '40px' }} />
      <h2>Creado con la misma ilusión que Toto ama el cine por Airam Plasencia</h2>
      <a href="https://github.com/Airam-Plasencia" target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="Icono de Airam Plasencia" style={{ width: '50px', height: '50px', marginTop: '20px' }} />
      </a>
    </div>
  );
};

export default About;