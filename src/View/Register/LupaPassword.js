import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,Box,Avatar,FormControlLabel} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {NavLink} from "react-router-dom";
import {Styles} from './Style';

class LupaPassword extends Component {
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
                            Lupa Password
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nis"
                                    label="NIS"
                                    name="nis"
                                    autoComplete="nis"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Reset Password
                            </Button>
                            
                        </form>
                        <Typography component="h1">
                            Login Kembali ? <NavLink to="/login" className={classes.link}>Login Disini</NavLink>
                        </Typography>
                        </Grid>   
                    </Grid>
                </Container>
        );
    }
}

export default withStyles(Styles)(LupaPassword);