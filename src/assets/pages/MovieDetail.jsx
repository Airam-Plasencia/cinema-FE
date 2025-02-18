import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();  
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACK_URL}/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <div>Cargando...</div>;  
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-image-above">
       
        <img 
          src={movie.backgroundImageUrl} 
          alt={movie.title} 
          className="image-above-movie" 
        />
      </div>
      <div className="movie-detail-header">
        <img 
          src={movie.posterUrl} 
          alt={movie.title} 
          className="movie-poster-detail" 
        />
        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          <p><strong>Año:</strong> {movie.year}</p>
          <p><strong>Duración:</strong> {movie.duration}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Guión:</strong> {movie.screenplay}</p>
          <p><strong>Actores:</strong> {movie.cast.join(', ')}</p>
          <p><strong>Género:</strong> {movie.genre.join(', ')}</p>
          <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
