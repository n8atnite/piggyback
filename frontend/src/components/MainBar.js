import * as React from 'react';
import { Link } from "react-router-dom";

// components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ThemeProvider, useTheme } from '@mui/material/styles';

// assets
import Logo from '../assets/logo512.png';

const styles = {
  barTextStyle: {
    pl: 2,
    pr: 2,
    zIndex: 1,
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'primary.main',
    bgcolor: 'black',
    textDecoration: 'none', 
    textShadow: '1px 2px #66786a'
  }
};

const pages = ['Shop', 'Donate', 'About'];
export default function ResponsiveAppBar() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
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
              variant='h6'
              sx={[styles.barTextStyle, {
                position: 'relative',
                bottom: 155,
                right: 20,
                transform: 'rotate(-3deg)',
            }]}>
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
                <Link style={{textDecoration: 'none'}} to={page.toLowerCase()}>
                  <Typography sx={[styles.barTextStyle, {mt: 2}]}>
                    {page.toLowerCase()} 
                  </Typography>
                </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};