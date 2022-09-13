import './App.css';
import Home from './Home';
import About from './About';
import Deals from './Deals';
import * as React from 'react';
import Catalog from './Catalog';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/deals" element={<Deals />} />
      </Routes>
    </div>
  );
};
