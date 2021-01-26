import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    flexGrow: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: 20,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [smallScreen, setSmallScreen] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSmallScreen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menu}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleClick} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Znajdź przepis
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Ugotuj
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Top 10
            </Typography>
          </div>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
        {smallScreen && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Znajdź przepis</MenuItem>
            <MenuItem onClick={handleClose}>Ugotuj</MenuItem>
            <MenuItem onClick={handleClose}>Top 10</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Menu>
        )}
      </AppBar>
    </div>
  );
};

export default NavBar;
