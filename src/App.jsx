import './App.css';
import Navbar from "./assets/components/Navbar/Navbar";
import Footer from "./assets/components/Footer/Footer";
import EditMovie from "./assets/components/EditMovie/EditMovie";
import { Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home';
import About from './assets/pages/About';
import AddMovies from './assets/pages/AddMovies';
import Curiosity from './assets/pages/Curiosity';
import MovieDetail from './assets/pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit/:id" element={<EditMovie />} />
        <Route path="/movies" element={<AddMovies />} />
        <Route path="/contact" element={<Curiosity />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
