import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahMurid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nis: '',
            nm_siswa: '',
            tempat_lahir: '',
            tgl_lahir: '',
            alamat: '',
            email: '',
            password: '',
            no_telpon: '',
            jurusan: '',
            url: '',
            foto_siswa: '',
            namaJurusan:[],
            jurusan:''

        }
    }

    changeImage = (event) => {
        event.preventDefault();

        let reader = new FileReader();
        let foto_siswa = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                foto_siswa: foto_siswa,
                url: reader.result
            })
        }

        reader.readAsDataURL(foto_siswa)
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handlerSimpan = (event) => {
        event.preventDefault();

        const data = new FormData();
        data.append('nis', this.state.nis)
        data.append('nm_siswa', this.state.nm_siswa)
        data.append('tempat_lahir', this.state.tempat_lahir)
        data.append('tgl_lahir', this.state.tgl_lahir)
        data.append('alamat', this.state.alamat)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('no_telpon', this.state.no_telpon)
        data.append('foto_siswa', this.uploadInput.files[0])
        data.append('jurusan', this.state.jurusan)

        fetch('https://apismk.herokuapp.com/siswa', {
            method: 'POST',
            body: data,
        }).then((response) => {
            console.log(response)
        }
        ).then(json => console.log(json))

        
    }

    componentDidMount() {
        fetch("https://apismk.herokuapp.com/jurusan") //fetch API Sliders
          .then(result => result.json())
          .then(
            (data) => {
              this.setState({
                namaJurusan: data
              });
              console.log(this.state.namaJurusan)
            },
            (error) => {
              console.log(error)
            }
          );
    
      }

    render() {
        const { classes } = this.props
        const {url,namaJurusan} = this.state
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Murid
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container fixed>
                        <form className={classes.form} noValidate onSubmit={this.handlerSimpan}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="nis"
                                        label="NIS"
                                        name="nis"
                                        autoComplete="nis"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="nm_siswa"
                                        label="Nama"
                                        name="nm_siswa"
                                        autoComplete="nm_siswa"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="tempat_lahir"
                                        label="tempat_lahir"
                                        name="tempat_lahir"
                                        autoComplete="tempat_lahir"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="tgl_lahir"
                                        label="Tanggal Lahir"
                                        name="tgl_lahir"
                                        autoComplete="email"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextareaAutosize
                                        className={classes.txtarea}
                                        aria-label="Alamat"
                                        name="alamat"
                                        rows={3}
                                        placeholder="Alamat" 
                                        onChange={this.changeHandler}
                                        />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="no_telpon"
                                        label="Nomer Handphone"
                                        id="no_telpon"
                                        autoComplete="current-telp"
                                        onChange={this.changeHandler}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <InputLabel id="demo-simple-select-label">Jurusan</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="jurusan"
                                        name="jurusan"
                                        onChange={this.changeHandler}
                                        
                                    >
                                        {namaJurusan.map((item, i) => (
                                            <MenuItem key={i} value={item.nama_jurusan}>{item.nama_jurusan}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <input ref={(ref) => {
                                        this.uploadInput = ref;
                                    }} onChange={this.changeImage} type="file" />
                                    <Paper style={{margintop:10}}>
                                        <img src={url} alt="img" />
                                    </Paper>
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
                        onClick={this.handlerSimpan}
                    >
                        Simpan
                    </Button>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(tambahMurid)