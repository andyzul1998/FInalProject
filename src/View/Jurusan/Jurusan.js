import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardContent, CardActions, CardMedia } from '@material-ui/core'
import { Styles } from './Style';
import { NavLink } from "react-router-dom";

class Jurusan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jurusan:[]
        };

    }

    componentDidMount() {
        fetch("https://apismk.herokuapp.com/jurusan") //fetch API News
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        jurusan: data
                    });
                    console.log(this.state.jurusan)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        const {jurusan} = this.state
        const { classes } = this.props
        return (
            <Container fixed className={classes.cardGrid} style={{ marginTop: 10 }}>
                <Typography variant="h4" component="h1" className={classes.page}>Jurusan</Typography>
                <Grid container spacing={2}>
                    {jurusan.map((card,i) => (
                        <Grid item md={12} xs={12} lg={12} key={i}>
                            <Card className={classes.card}>
                                <Grid item md={7} xs={12} lg={12}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h1" variant="h4" className={classes.judul}>
                                            {card.nama_jurusan}
                                        </Typography>
                                        <Typography>
                                        {(card.deskripsi_jurusan).toString().substring(1,150)}...
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.link}>
                                        <NavLink to={{pathname:`/detail-jurusan/${card._id}`
                                }} >Read More </NavLink>
                                    </CardActions>
                                </Grid>
                                <Grid item md={5} xs={12} lg={12} className={classes.gridMedia}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image_jurusan}
                                        title="jurusan title"
                                    />
                                </Grid>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        );
    }
}

export default withStyles(Styles)(Jurusan);