import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACK_URL}/movies`)
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
                            <Link to={`/movie/${movie.id}`}>
                                <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
                                <h2>{movie.title}</h2>
                                <p>{movie.year}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Home;