import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Card,CardContent,CardMedia} from '@material-ui/core'
import {Styles} from './Style';
import Moment from 'react-moment'

class DetailNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            detailNews:[],
            id:this.props.match.params._id,
        };
        
    }

    componentDidMount() {
        fetch(`https://apismk.herokuapp.com/news/${this.state.id}`)
          .then(res => res.json())
          .then(
            (data) => {
              this.setState({
                detailNews: data
              });
            },                
            (error) => {
              console.log(error)   
            }
          )
      }

    render() {
        const {classes}= this.props
        const {detailNews} = this.state
        return (
                <Container fixed className={classes.cardGrid}  style={{marginTop:10}}>
                    <Grid container className={classes.page}>
                        <Grid item md={6} xs={6} lg={6}>
                            <Typography variant="h4" component="h1" >Detail News</Typography>
                        </Grid>
                    </Grid>
                    
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={detailNews.image_news}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography>
                                {detailNews.author}
                            </Typography>
                            <Typography className={classes.tanggal}>
                            <Moment format="D MMM YYYY" withTitle>
                                {detailNews.createdAt}
                            </Moment>
                            </Typography>
                            <Typography variant="h4" component="h1">
                                {detailNews.judul_news}
                            </Typography>
                            <Typography>
                                {detailNews.deskripsi_news}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
        );
    }
}

export default withStyles(Styles)(DetailNews);