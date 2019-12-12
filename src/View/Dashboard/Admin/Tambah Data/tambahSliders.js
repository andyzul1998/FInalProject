import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, Box } from '@material-ui/core'
import { Styles } from '../Style';

class tambahSliders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_slider: '',
            url: '',
            judul_slider: ''
        }
    }

    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_slider = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_slider: image_slider,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_slider)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('image_slider', this.uploadInput.files[0])
        data.append('judul_slider', this.state.judul_slider)

        fetch('https://apismk.herokuapp.com/slider', {
            method: 'POST',
            body: data,
            image_slider: this.state.imagePreviewUrl,
        }).then((response) => {
            console.log(response.json)
        })
    }

    render() {
        const { classes } = this.props
        let { url } = this.state;
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Sliders
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container fixed>
                        <form className={classes.form} noValidate onSubmit={this.handlerUpload}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="judul_slider"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="judul_slider"
                                        label="Nama Sliders"
                                        autoComplete="title"
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

export default withStyles(Styles)(tambahSliders)