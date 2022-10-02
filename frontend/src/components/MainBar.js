import * as React from 'react';
import { Link } from "react-router-dom";

// components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// assets
import Logo from '../assets/logo512.png';

const pages = ['shop', 'donate', 'about'];
export default function ResponsiveAppBar() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 2
      }}>
        <Box
          component='a'
          href='/'
          sx={{
            width: 250,
            height: 250,
            textDecoration: 'none'
        }}>
          <Box 
            component='img'
            src={Logo}
            alt="" 
            sx={{
                width: 250,
                height: 250
          }}/>
          <Typography
            variant='inkbar'
            component='h3'
            sx={{
              position: 'relative',
              bottom: 155,
              right: 20,
              transform: 'rotate(-3deg)',
          }}>
            PIGGYBACK.INK
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: 0.6
        }}>
          {pages.map((page) => (
              <Link style={{textDecoration: 'none'}} to={'/' + page}>
                <Typography component='h2' variant='inkbar' sx={{mt: 2}}>
                  {page} 
                </Typography>
              </Link>
          ))}
        </Box>
      </Box>
    </Container>
  );
};