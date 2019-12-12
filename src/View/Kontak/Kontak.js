import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,TextareaAutosize} from '@material-ui/core'
import {Styles} from './Style';

class Kontak extends Component {
    constructor(props){
        super(props);
            this.state = {
                nama:'',
                email:'',
                pesan:''
            }
        
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('nama_lengkap', this.state.nama)
        data.append('email', this.state.email)
        data.append('pesan', this.state.pesan)

        fetch('https://apismk.herokuapp.com/kontak-kami', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        }
        ).then(json => console.log(json))

        
    }

    render() {
        
        const {classes}= this.props
        return (
                <Container fixed className={classes.wrapper}>
                    <Grid container fixed spacing={2}>
                        <Grid item md={8}></Grid>
                        <Grid item md={4} className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Kontak Kami
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="nama"
                                    label="Nama"
                                    name="nama"
                                    autoComplete="nama"
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
                                <TextareaAutosize 
                                    className={classes.txtarea}
                                    aria-label="pesan" 
                                    name='pesan'
                                    rows={3} 
                                    placeholder="Masukan Pesan" />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handlerSimpan}
                            >
                                
                                Submit
                            </Button>
                            
                        </form>
                        </Grid>   
                    </Grid>
                </Container>
        );
    }
}

export default withStyles(Styles)(Kontak);