import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,IconButton,TextField,Card,CardContent,CardActions,CardMedia,CardHeader} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import Moment from 'react-moment'
import {Styles} from './Style';
import {NavLink} from "react-router-dom";

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
         news:[]
        };
    }

    componentDidMount() {
        fetch("https://apismk.herokuapp.com/news") //fetch API News
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        news: data
                    });
                    console.log(this.state.news)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    render() {
        const {news} = this.state
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
                        {news.map((item,i) => (
                        <Grid item key={i} xs={12} md={3}>
                            <Card className={classes.card}>
                            <CardHeader style={{height:100}}
                                title={item.judul_news}
                            />
                            <CardMedia
                                className={classes.cardMedia}
                                image={item.image_news}
                                title="Image title"
                            />
                            <Typography>
                                {item.author}
                            </Typography>
                            <Moment format="D MMM YYYY" withTitle>
                                {item.createdAt}
                            </Moment>
                            <CardContent className={classes.cardContent}>
                                <Typography>
                               {(item.deskripsi_news).toString().substring(1,50)}...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <NavLink to={{pathname:`/detail-news/${item._id}`
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