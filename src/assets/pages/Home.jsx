import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    
    const fetchMovies = () => {
        axios.get(`${import.meta.env.VITE_BACK_URL}/movies`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_BACK_URL}/movies/${id}`)
            .then(() => {
                
                setMovies((prevMovies) => prevMovies.filter(movie => movie.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting movie:', error);
            });
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    useEffect(() => {
        fetchMovies();
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
                            <img 
                                src="/img/edit.png" 
                                alt="Editar" 
                                className="edit-icon" 
                                onClick={() => handleEdit(movie.id)} 
                                style={{ cursor: 'pointer', width: '30px', height: '30px', marginLeft: '20px' }} 
                            />
                            <img 
                                src="/img/delete.png" 
                                alt="Eliminar" 
                                className="delete-icon" 
                                onClick={() => handleDelete(movie.id)} 
                                style={{ cursor: 'pointer', width: '30px', height: '30px' }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
