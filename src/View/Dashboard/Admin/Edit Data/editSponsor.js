import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class editSponsor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            image_sponsor: '',
            nama_sponsor: '',
            sponsor: [],
            id: this.props.match.params._id,

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

        fetch(`http://apismk.herokuapp.com/sponsor/${this.state.id}`, {
            method: 'PUT',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    }

    componentDidMount() {
        fetch(`http://apismk.herokuapp.com/sponsor/${this.state.id}`) //fetch API 
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        sponsor: data,
                        image_sponsor: data.image_sponsor,
                        nama_sponsor: data.nama_sponsor,
                    });
                    console.log(this.state.result)
                },
                (error) => {
                    console.log(error)
                }
            );

    }

    render() {
        const { classes } = this.props
        const { url } = this.state
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Edit Sponsor
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
                                        value={this.state.nama_sponsor}
                                        label="Nama Sponsor"
                                        name="nama_sponsor"
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
                    <img src={this.state.image_sponsor} alt="img" />
                    <img src={url} alt="img" />
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(editSponsor)