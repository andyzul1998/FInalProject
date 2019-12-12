import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahJurusan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_jurusan:'',
            url:'',
            nama_jurusan:'',
            deskripsi_jurusan:''
        }
    }
    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_jurusan = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_jurusan: image_jurusan,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_jurusan)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('image_jurusan', this.uploadInput.files[0])
        data.append('nama_jurusan', this.state.nama_jurusan)
        data.append('deskripsi_jurusan', this.state.deskripsi_jurusan)

        fetch('https://apismk.herokuapp.com/jurusan', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response.json)
        })
    }
    render() {
        const { classes } = this.props
        const {url} = this.state
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Jurusan
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
                                        label="Nama Jurusan"
                                        name="nama_jurusan"
                                        autoComplete="title"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        className={classes.txtarea}
                                        aria-label="Deskripsi"
                                        name="deskripsi_jurusan"
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

export default withStyles(Styles)(tambahJurusan)