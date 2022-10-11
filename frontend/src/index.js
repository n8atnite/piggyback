import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

// components
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import Catalog from './components/Shop';
import Checkout from './components/Checkout';
import theme from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>  
        <CssBaseline />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Catalog />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/config" />
            <Route path="/create-checkout-session" />
          </Routes>
          <div style={theme.styles.bgStyle} />
        </div>
      </ThemeProvider>,
    </BrowserRouter>
  </React.StrictMode>
);