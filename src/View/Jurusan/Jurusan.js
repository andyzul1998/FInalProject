import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardContent, CardActions, CardMedia } from '@material-ui/core'
import { Styles } from './Style';
import { NavLink } from "react-router-dom";

class Jurusan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1, 2, 3]
        };

    }
    render() {
        const item = this.state.items
        const { classes } = this.props
        return (
            <Container fixed className={classes.cardGrid} style={{ marginTop: 10 }}>
                <Typography variant="h4" component="h1" className={classes.page}>Jurusan</Typography>
                <Grid container spacing={2}>
                    {item.map(card => (
                        <Grid item md={12} xs={12} lg={12} key={card}>

                            <Card className={classes.card}>
                                <Grid item md={7} xs={12} lg={12}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography component="h1" variant="h4" className={classes.judul}>
                                            Jurusan Contoh Saja
                                        </Typography>
                                        <Typography>
                                            jahdjhasdjhjkashdaskkjahjdhjakshdkjhjdhkjashdjhasjhdjkashkdjhaskjdhskjah
                                            kashdkjhasdkjhaskjdhhasdhasdhkjajsadkadskjjaskdljklasdjk
                                            kjashdkjahsdjhasdkjhsajdkjashd
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.link}>
                                        <NavLink to="/detail-jurusan" >Read More </NavLink>
                                    </CardActions>
                                </Grid>
                                <Grid item md={5} xs={12} lg={12} className={classes.gridMedia}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={require("../../Images/sea.jpg")}
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