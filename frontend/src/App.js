import * as React from 'react';
import Home from './Home';
import About from './About';
import Donate from './Donate';
import Catalog from './Catalog';
import { Routes, Route } from "react-router-dom";
import Texture from './assets/bg_seamless.jpg'

const bgStyle = {
  backgroundImage: `url(${Texture})`,
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  overflow: 'auto',
};

export default function App() {
  return (
    <div className="App" style={bgStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Catalog />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
};

