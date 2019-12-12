import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class editPrestasi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            image_prestasi: '',
            nama_prestasi: '',
            deskripsi_prestasi:'',
            prestasi:[],
            id:this.props.match.params._id,

        }
    }
    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let image_prestasi = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                image_prestasi: image_prestasi,
                url: reader.result
            })
        }

        reader.readAsDataURL(image_prestasi)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerUpload = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('image_prestasi', this.uploadInput.files[0])
        data.append('nama_prestasi', this.state.nama_prestasi)
        data.append('deskripsi_prestasi', this.state.deskripsi_prestasi)

        fetch(`http://apismk.herokuapp.com/prestasi/${this.state.id}`, {
            method: 'PUT',
            body: data,
        }).then((response) => {
            console.log(response)
        })
    }

    componentDidMount() {
        fetch(`http://apismk.herokuapp.com/prestasi/${this.state.id}`) //fetch API 
          .then(result => result.json())
          .then(
            (data) => {
              this.setState({
                prestasi: data,
                image_prestasi: data.image_prestasi,
                nama_prestasi: data.nama_prestasi,
                deskripsi_prestasi: data.deskripsi_prestasi,
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
                        Edit Prestasi
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
                                        value={this.state.nama_prestasi}
                                        label="Nama Prestasi"
                                        name="nama_prestasi"
                                        autoComplete="title"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextareaAutosize
                                        className={classes.txtarea}
                                        aria-label="Deskripsi"
                                        name="deskripsi_prestasi"
                                        value={this.state.deskripsi_prestasi}
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
                    <img src={this.state.image_prestasi} alt="img" />
                    <img src={url} alt="img" />
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(editPrestasi)