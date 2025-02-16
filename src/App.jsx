import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5005/movies')  
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []); 

  return (
    <div className="App">
      <h1>Lista de Películas</h1>
      <div className="movies-container">
        
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
