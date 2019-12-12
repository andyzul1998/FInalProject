import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,Box,Avatar,FormControlLabel} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {NavLink} from "react-router-dom";
import {Styles} from './Style';

class Login extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        
        const {classes}= this.props
        return (
                <Container fixed className={classes.wrapper}>
                    <Grid container fixed spacing={2}>
                        <Grid item md={4} className={classes.paper}>
                        <Avatar>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                        <Typography component="h1"> 
                            Belum Punya akun ? <NavLink to="/daftar-akun" className={classes.link}>Daftar Disini</NavLink>
                        </Typography>
                        <Typography component="h1">
                            <NavLink to="/lupa-password" className={classes.link}>Lupa Password ?</NavLink>
                        </Typography>  
                        </Grid>   
                    </Grid>
                </Container>
        );
    }
}

export default withStyles(Styles)(Login);