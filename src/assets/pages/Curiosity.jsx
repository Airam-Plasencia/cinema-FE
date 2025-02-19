import React from 'react';
import './Curiosity.css';

const Curiosity = () => {
  return (
    <div>
      <div className="curiosity-text">
        <h1>Multicines Galaxy's</h1>
        <h2><strong>Las Palmas de Gran Canaria (1985)</strong></h2>
        <hr />
        <p>
          Los multicines Galaxy's comenzaron su andadura el 24 de julio de 1985, 
          en la calle El Cid, 53, en la zona de Mesa y López, convirtiéndose así 
          en el primer multicines de la isla, junto con el Royal (que cambió su tipología ese mismo año). 
          Impulsado por el empresario Francisco Melo Sansó, el Galaxy's contó con 6 salas de exhibición simultáneas 
          y con una oferta variada que en muchas ocasiones incluía películas en versión original y ciclos temáticos.
        </p>
      </div> 
      <div className="video-container">
        <video width="60%" controls>
          <source src="/public/video/cine-galaxy.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>
      </div>
    </div>
  );
};

export default Curiosity;

