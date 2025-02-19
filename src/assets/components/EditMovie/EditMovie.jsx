import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditMovie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    // Obtener la información de la película a editar
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACK_URL}/movies/${id}`)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                console.error('Error fetching movie data:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
            ...prevMovie,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${import.meta.env.VITE_BACK_URL}/movies/${id}`, movie)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error updating movie:', error);
            });
    };

    if (!movie) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h2>Editar Película</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        name="title"
                        value={movie.title}
                        onChange={handleChange}
                        required
                        style={{ padding: '8px', width: '300px' }}
                    />
                </div>
                <div>
                    <label>Año:</label>
                    <input
                        type="text"
                        name="year"
                        value={movie.year}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '80px' }}
                    />
                </div>
                <div>
                    <label>Duración:</label>
                    <input
                        type="text"
                        name="duration"
                        value={movie.duration}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '80px' }}
                    />
                </div>
                <div>
                    <label>Director: </label>
                    <input
                        type="text"
                        name="director"
                        value={movie.director}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '150px' }}
                    />
                </div>
                <div>
                    <label>Guion: </label>
                    <input
                        type="text"
                        name="screenplay"
                        value={movie.screenplay}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '150px' }}
                    />
                </div>
                <div>
                    <label>Elenco: </label>
                    <input
                        type="text"
                        name="cast"
                        value={movie.cast}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '200px' }}
                    />
                </div>
                <div>
                    <label>Música: </label>
                    <input
                        type="text"
                        name="music"
                        value={movie.music}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '150px' }}
                    />
                </div>
                <div>
                    <label>Género: </label>
                    <input
                        type="text"
                        name="genre"
                        value={movie.genre}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '150px' }}
                    />
                </div>
                <div>
                    <label>Sinopsis: </label>
                    <textarea
                        name="synopsis"
                        value={movie.synopsis}
                        onChange={handleChange}
                        required
                        style={{
                            marginTop: '5px',
                            padding: '8px',
                            width: '250px',
                            height: '80px',
                        }}
                    />
                </div>
                <div>
                    <label>URL Poster: </label>
                    <input
                        type="text"
                        name="posterUrl"
                        value={movie.posterUrl}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', width: '300px', textAlign: 'center' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        marginTop: '5px',
                        fontSize: '16px',
                        padding: '10px 20px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        backgroundColor: '#710866',
                        color: 'white',
                        transition: 'background-color 0.3s ease'
                    }}
                >
                    Actualizar
                </button>

            </form>
        </div>
    );
};

export default EditMovie;
