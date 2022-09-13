import './App.css';
import * as React from 'react';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ResponsiveAppBar from './ResponsiveAppBar';
import RemoveIcon from '@mui/icons-material/Remove';
import { Routes, Route, Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <Paper elevation={1}>
        <ResponsiveAppBar/>
        <image src="logo512.png"></image>
      </Paper>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
