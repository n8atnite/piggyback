import Cloud from './Cloud';
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';

export default function Home() {
    return (
      <>
        <Box sx={{ backgroundColor: '#5394fc' ,height: '1920px' }}
        >
          <ResponsiveAppBar />
          <br></br>
          <Grid container spacing={2} sx={{ position: 'absolute',
            left: '100px' }} 
          >
            <Grid xs={2}>
              <Cloud />
            </Grid>
            <Grid xs={2}>
              <Cloud height={300} />
            </Grid>
            <Grid xs={4}>
              <Cloud height={500} width={500} />
            </Grid>
            <Grid xs={4}>
              <Cloud height={400} width={300} />
            </Grid>
            <Grid xs={2}>
              <Cloud width={500} />
            </Grid>
            <Grid xs={2}>
              <Cloud height={300} width={300} />
            </Grid>
            <Grid xs={4}>
              <Cloud text='peep merch' height={300} width={500}
                shift={-100} scoot={-65} />
            </Grid>
            <Grid xs={2}>
              <Cloud height={200} width={150} />
            </Grid>
            <Grid xs={2}>
              <Cloud height={300} width={300} />
            </Grid>
            <Grid xs={2}>
              <Cloud height={200} width={150} />
            </Grid>
            <Grid xs={4}>
              <Cloud height={400} width={300} />
            </Grid>
            <Grid xs={2}>
              <Cloud height={200} width={150} />
            </Grid>
          </Grid>
        </Box>
      </>
    );
};
