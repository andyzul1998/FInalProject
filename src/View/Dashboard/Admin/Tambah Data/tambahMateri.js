import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahMateri extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jurusan: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Box component="div" className={classes.title}>
                    <Typography variant="h4" component="h3" align="center">
                        Tambah Materi
                    </Typography>
                    <hr />
                </Box>
                <Paper className={classes.root}>
                    <Container fixed>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="judul"
                                    label="Nama Materi"
                                    name="judul"
                                    autoComplete="judul"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextareaAutosize
                                    className={classes.txtarea}
                                    aria-label="Deskripsi"
                                    rows={3}
                                    placeholder="Deskripsi" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <InputLabel id="demo-simple-select-label">Jurusan</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="id.jurusan"
                                    onChange={this.handleChange}
                                >
                                    {/* {this.state.jurusan.map((item,i) => ( */}
                                    <MenuItem value='1'>Teknik Komputer Jaringan</MenuItem>
                                    <MenuItem value='2'>Multimedia</MenuItem>
                                    <MenuItem value='3'>Rekayasa Perangkat Lunak</MenuItem>
                                    {/* ))} */}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    type="file"
                                    name="image"
                                    id="image"
                                />
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
                        >
                            Simpan
                        </Button>
                </Paper>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(tambahMateri)