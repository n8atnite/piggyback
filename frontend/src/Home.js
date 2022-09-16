import * as React from 'react';
import Box from '@mui/material/Box';
import MainBar from './MainBar';

export default function Home() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh'
      }}
    >
      <MainBar/>
    </Box>
  );
};
