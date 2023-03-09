import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 100,color:'red' }}>
      <AppBar position="static" style={{color:"orange"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,
            color:'red' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,
          color:"red" }}>
            <h3>HACKATHON REGISTRATION</h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
