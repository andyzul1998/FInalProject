import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box} from '@material-ui/core'
import { Styles } from '../Style';

class tambahTestimoni extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'',
            image_testimoni:'',
            nama_alumni:'',
            deskripsi_testimoni:'',
        }
    }
    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_testimoni = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_testimoni: image_testimoni,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_testimoni)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('foto_alumni', this.uploadInput.files[0])
        data.append('nama_alumni', this.state.nama_alumni)
        data.append('deskripsi_testimoni', this.state.deskripsi_testimoni)

        fetch('https://apismk.herokuapp.com/testimoni', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    } 
    render() {
        const { classes } = this.props
        const {url} = this.state
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah News
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container fixed>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Nama"
                                    name="nama_alumni"
                                    autoComplete="title"
                                    onChange={this.changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.txtarea}
                                    aria-label="Deskripsi"
                                    name="deskripsi_testimoni"
                                    rows={3}
                                    placeholder="Deskripsi" 
                                    onChange={this.changeHandler}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                            <input ref={(ref) => {
                                        this.uploadInput = ref;
                                    }} onChange={this.changeImage} type="file" />
                            </Grid>
                        </Grid>
                    </form>
                    </Container>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={this.handlerUpload}
                    >
                        Simpan
                    </Button>
                    <img src={url} alt="img" />
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(tambahTestimoni)