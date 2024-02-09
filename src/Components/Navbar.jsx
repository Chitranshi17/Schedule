import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  return (
    <AppBar position="fixed" >
      <Toolbar>
        <IconButton
          edge="start"
          size="medium"
          color="inherit"
          aria-label="menu"
          sx={{ mr: "5.5rem" }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h4">Scheduleia</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
