import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class editSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            image_slider: '',
            judul_slider: '',
            slider:[],
            id:this.props.match.params._id,

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

        fetch(`http://apismk.herokuapp.com/slider/${this.state.id}`, {
            method: 'PUT',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    }

    componentDidMount() {
        fetch(`http://apismk.herokuapp.com/slider/${this.state.id}`) //fetch API 
          .then(result => result.json())
          .then(
            (data) => {
              this.setState({
                slider: data,
                image_slider: data.image_slider,
                judul_slider: data.judul_slider,
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
                        Edit Sliders
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
                                        value={this.state.judul_slider}
                                        label="Nama Sliders"
                                        name="judul_slider"
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
                    <img src={this.state.image_slider} alt="img" />
                    <img src={url} alt="img" />
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(editSlider)