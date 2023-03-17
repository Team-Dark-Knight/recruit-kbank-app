import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MapView() {
  return (
      <Box component="main" sx={{ p: 3 }}>
         <Toolbar />
        <Typography>
        찾아오시는길
        </Typography>
      </Box>

    
  );
}

export default MapView;