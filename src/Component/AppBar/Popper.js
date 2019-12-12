import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles} from '@material-ui/core/styles'
import {NavLink} from "react-router-dom";
import {AccountCircle} from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  link: {
    marginRight:12,
    color: 'black',
    textDecoration: 'none',
    padding:5,
    '&:hover,&.active,&.active:hover' : {
        backgroundColor:'aqua',
        borderRadius:5,
        color:'black',
        padding:7
    }

    },
    button:{
      color:'white'
    }
  }))

export default function Popper() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className={classes.button} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircle />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLink className={classes.link} to="/login">Siswa</NavLink></MenuItem>
        <MenuItem onClick={handleClose}><NavLink className={classes.link} to="/dashboard-admin/">Admin</NavLink></MenuItem>
      </Menu>
    </div>
  );
}