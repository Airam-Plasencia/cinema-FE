import React, { useState } from 'react';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMovieData((prevData) => ({
        ...prevData,
        posterUrl: URL.createObjectURL(file) 
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nueva película agregada:', movieData);
    
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
            style={{ padding: '3px',  width: '100px' }}
            />
        </div>
        
        <div>
          <label>Duración: </label>
          <input
            type="text"
            name="duration"
            value={movieData.duration}
            onChange={handleChange}
            required
            style={{ padding: '3px',  width: '100px' }}
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
            style={{ padding: '3px',  width: '200px' }}
            />
        </div>
        
        <div>
          <label>Guionista: </label>
          <input
            type="text"
            name="screenplay"
            value={movieData.screenplay}
            onChange={handleChange}
            required
            style={{ padding: '3px',  width: '200px' }}
            />
        </div>
        
        <div>
          <label>Elenco: </label>
          <input
            type="text"
            name="cast"
            value={movieData.cast}
            onChange={handleChange}
            required
            style={{ padding: '3px',  width: '200px' }}
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
            style={{ padding: '3px',  width: '200px' }}
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
            style={{ padding: '3px',  width: '200px' }}
            />
        </div>
        
        <div>
          <label>Sinopsis: </label>
          <textarea
            name="synopsis"
            value={movieData.synopsis}
            onChange={handleChange}
            required
            style={{ padding: '5px', width: '300px' }}
            />
        </div>

        
        <div>
          <label>Seleccionar Póster: </label>
          <input
            type="file"
            accept="image/jpeg"
            onChange={handleFileChange}
            required
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
            marginTop: '20px',
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

