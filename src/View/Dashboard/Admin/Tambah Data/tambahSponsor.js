import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_sponsor: '',
            url: '',
            nama_sponsor: ''

        }
    }
    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_sponsor = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_sponsor: image_sponsor,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_sponsor)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('image_sponsor', this.uploadInput.files[0])
        data.append('nama_sponsor', this.state.nama_sponsor)

        fetch('https://apismk.herokuapp.com/sponsor', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    }
    render() {
        const { classes } = this.props
        const { url } = this.state
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Sponsor
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
                                        label="Nama Sponsor"
                                        name="nama_sponsor"
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

export default withStyles(Styles)(tambahSponsor)