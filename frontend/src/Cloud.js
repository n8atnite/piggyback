import * as React from 'react';
import { Box } from '@mui/material';
import cloud from './assets/cloudy.png'

export default function Cloud({
    text = '', width = 100, height = 100, shift = 0, scoot = 0
}) {

  const wi = `${width}px`
  const he = `${height}px`
  const t = `${height/2 + scoot}px`
  const l = `${width/2 + shift}px`

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}
      >
        <div style={{ position: 'relative' }}>
          <img src={cloud} alt='' width={wi} height={he} />
          <p sx={{ color: 'secondary' }}
            style={{ fontSize: 36, position: 'absolute', 
              left: l, top: t }}
          >
            {text}
          </p>
        </div>
    </Box>
    </>
  );
};
