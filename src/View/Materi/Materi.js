import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,IconButton,TextField,Box,Card,CardContent,CardActions,CardMedia,CardHeader,InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import {Styles} from './Style';
import {NavLink} from "react-router-dom";

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        };
        
    }

    componentDidMount() {
        fetch("http://apismk.herokuapp.com/materi")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    items: result
                });
            },
            (error) => {
                console.log(error)
            }
        )
    }

    render() {
        const {items} = this.state
        const {classes}= this.props
        return (
                <Container fixed className={classes.cardGrid}  style={{marginTop:10}}>
                    <Grid container className={classes.page}>
                        <Grid item md={6} xs={6} lg={6}>
                            <Typography variant="h4" component="h1" >News</Typography>
                        </Grid>
                        <Grid item md={6} xs={6} lg={6}>
                            <div className={classes.search}>
                                <IconButton aria-label="search" >
                                    <SearchIcon  fontSize="small" />
                                </IconButton>
                                <TextField 
                                placeholder="Search.."/>
                            </div>
                            

                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        {items.map((loh, i) => (
                        <Grid item key={i} xs={12} md={3}>
                            <Card className={classes.card}>
                            <CardHeader
                                title={items.judul_materi}
                                subheader="materi Jurusan TKJ"
                            />
                            <CardMedia
                                className={classes.cardMedia}
                                image={items.image_materi}
                                title="Judul Gambar"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography>
                                {items.judul_materi}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <NavLink to={{pathname:`/detail-materi/${items._id}`
                                }}>Read More </NavLink>
                            </CardActions>
                            </Card>
                        </Grid>
                        ))}
                    </Grid>
                </Container>
        );
    }
}

export default withStyles(Styles)(News);