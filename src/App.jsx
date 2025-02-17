import './App.css';
import Navbar from "./assets/components/Navbar/Navbar";
import { Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home';
import About from './assets/pages/About';
import AddMovies from './assets/pages/AddMovies';
import Curiosity from './assets/pages/Curiosity';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<AddMovies />} />
        <Route path="/contact" element={<Curiosity />} />
      </Routes>
    </div>
  );
}

export default App;
