import * as React from 'react';
import { Box, Paper } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';

export default function Home() {
    return (
      <>
        <Paper elevation={1}>
          <ResponsiveAppBar/>
        </Paper>
        <Box sx={{ height: '1200px'}}>
          <p sx={{ color: 'text.primary', fontSize: 34 }}>
            Call to Action
          </p>
        </Box>
      </>
    );
};
