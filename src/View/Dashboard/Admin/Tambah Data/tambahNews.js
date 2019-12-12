import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'',
            image_news:'',
            judul_news:'',
            deskripsi_news:'',
            author:''
        }
    }
    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_news = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_news: image_news,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_news)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('image_news', this.uploadInput.files[0])
        data.append('judul_news', this.state.judul_news)
        data.append('deskripsi_news', this.state.deskripsi_news)

        fetch('https://apismk.herokuapp.com/news', {
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
                                    label="Judul News"
                                    name="judul_news"
                                    autoComplete="title"
                                    onChange={this.changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="penulis"
                                    label="Penulis"
                                    name="author"
                                    autoComplete="penulis"
                                    onChange={this.changeHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.txtarea}
                                    aria-label="Deskripsi"
                                    name="deskripsi_news"
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

export default withStyles(Styles)(tambahNews)