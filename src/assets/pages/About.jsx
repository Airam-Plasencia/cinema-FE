import React from 'react';
import icon from '../img/25231.png'; 
import icon2 from '../img/cinema-30.jpg';
import linkedinIcon from '../img/Linkedin.png';

const About = () => {
  return (
    <div style={{ minHeight: '100vh', textAlign: 'center', padding: '20px' }}>
      <img src={icon2} alt="Icono de Airam Plasencia" style={{ width: '580px', height: '380px',  }} />
      <h2>Creado con la misma ilusión que Toto ama el cine por Airam Plasencia</h2>
      <a href="https://github.com/Airam-Plasencia" target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="Icono de Airam Plasencia" style={{ width: '50px', height: '50px', marginTop: '20px' }} />
      </a>
      <a href="https://www.linkedin.com/in/airam-plasencia-mendoza-a71870121/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn Logo" style={{ width: '50px', height: '50px', marginTop: '20px', marginLeft: '20px' }} />
      </a>
    </div>
  );
};

export default About;