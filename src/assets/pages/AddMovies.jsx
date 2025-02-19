import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const AddMovies = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    year: '',
    duration: '',
    director: '',
    screenplay: '',
    cast: '',
    music: '',
    genre: '',
    synopsis: '',
    posterUrl: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5005/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Película agregada:', data);
        
        // Limpiar los campos del formulario
        setMovieData({
          title: '',
          year: '',
          duration: '',
          director: '',
          screenplay: '',
          cast: '',
          music: '',
          genre: '',
          synopsis: '',
          posterUrl: ''
        });
        
        
        navigate('/');  
      })
      .catch(error => {
        console.error('Error al agregar la película:', error);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Agregar Película a Nuovo Cinema Galaxy</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input
            type="text"
            name="title"
            value={movieData.title}
            onChange={handleChange}
            required
            style={{ padding: '8px', width: '300px' }}
          />
        </div>
        <div>
          <label>Año: </label>
          <input
            type="number"
            name="year"
            value={movieData.year}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '100px' }}
          />
        </div>

        <div>
          <label>Duración: </label>
          <input
            type="number"
            name="duration"
            value={movieData.duration}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '100px' }}
          />
        </div>

        <div>
          <label>Director: </label>
          <input
            type="text"
            name="director"
            value={movieData.director}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '150px' }}
          />
        </div>

        <div>
          <label>Guion: </label>
          <input
            type="text"
            name="screenplay"
            value={movieData.screenplay}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '150px' }}
          />
        </div>

        <div>
          <label>Reparto: </label>
          <input
            type="text"
            name="cast"
            value={movieData.cast}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '200px' }}
          />
        </div>

        <div>
          <label>Música: </label>
          <input
            type="text"
            name="music"
            value={movieData.music}
            onChange={handleChange}
            required
            style={{  padding: '8px', width: '150px' }}
          />
        </div>

        <div>
          <label>Género: </label>
          <input
            type="text"
            name="genre"
            value={movieData.genre}
            onChange={handleChange}
            required
            style={{ marginTop: '5px', padding: '8px', width: '150px' }}
          />
        </div>

        <div className="textarea-container">
          <label htmlFor="synopsis" className="textarea-label">Sinopsis: </label>
          <textarea
            name="synopsis"
            value={movieData.synopsis}
            onChange={handleChange}
            required
            style={{
              
              padding: '8px',
              width: '250px',
              height: '80px',
            }}
          />
        </div>

        <div>
          <label>Póster (URL): </label>
          <input
            type="url"
            name="posterUrl"
            value={movieData.posterUrl}
            onChange={handleChange}
            required
            style={{ padding: '8px', width: '300px', textAlign: 'center' }}
          />
        </div>

        {movieData.posterUrl && (
          <div style={{ marginTop: '10px' }}>
            <h4>Vista previa del póster:</h4>
            <img src={movieData.posterUrl} alt="Poster Preview" style={{ width: '200px', height: 'auto' }} />
          </div>
        )}

        <button
          type="submit"
          style={{ 
            backgroundColor: '#710866',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Agregar Película
        </button>
      </form>
    </div>
  );
};

export default AddMovies;

