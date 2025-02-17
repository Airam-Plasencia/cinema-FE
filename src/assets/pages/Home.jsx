import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
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
        <div style={{ minHeight: '100vh' }}>
            <div className="home">
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
        </div>
    );
};

export default Home;
