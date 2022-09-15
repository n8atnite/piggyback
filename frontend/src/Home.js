import * as React from 'react';
import Box from '@mui/material/Box';
import MainBar from './MainBar';

export default function Home() {
  return (
    <>
      <Box sx={{bgcolor: "gray", p: 5}}>
        <MainBar/>
      </Box>
      <Box sx={{ height: '1200px'}}>
        <p sx={{ color: 'text.primary', fontSize: 34 }}>
          Call to Action
        </p>
      </Box>
    </>
  );
};
