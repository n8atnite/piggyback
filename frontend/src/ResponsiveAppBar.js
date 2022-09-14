import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const pages = ['Catalog', 'Deals', 'About'];
export default function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           PIGGYBACK.INK
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={page.toLowerCase()}
                  style={{ textDecoration: 'none', color: 'beige',
                    textShadow: '2px 2px #66786a' }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              <Button
                key={"Cart"}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Tooltip title="Go to Cart">
                  <Link to={"/cart"}
                    style={{ textDecoration: 'none', color: 'beige',
                      textShadow: '2px 2px #66786a' }}
                  >
                    <ShoppingCartOutlinedIcon/>
                  </Link>
                </Tooltip>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};