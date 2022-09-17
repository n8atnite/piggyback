import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
// import reportWebVitals from './unused/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// components
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Catalog from './components/Catalog';
import Checkout from './components/Checkout';
import theme from './utils/theme';
import styles from './utils/styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>  
        <CssBaseline />
        <div style={styles.bgStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Catalog />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </ThemeProvider>,
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
