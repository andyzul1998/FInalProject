import React, { Component } from 'react';
import { Container, Paper, Grid, Typography, withStyles, Button, TextField, TextareaAutosize, Box, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Styles } from '../Style';

class tambahPromo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
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
                        Tambah Promo
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
                                    label="Nama Promo"
                                    name="title"
                                    autoComplete="title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextareaAutosize
                                    className={classes.txtarea}
                                    aria-label="Deskripsi"
                                    rows={3}
                                    placeholder="Deskripsi" />
                            </Grid>
                            <Grid item xs={12}>
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

export default withStyles(Styles)(tambahPromo)