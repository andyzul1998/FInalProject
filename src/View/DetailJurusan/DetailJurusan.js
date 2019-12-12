import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,Box,Card,CardContent,CardActions,CardMedia,CardHeader} from '@material-ui/core'
import {Styles} from './Style';

class DetailJurusan extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params._id,
            jurusan:[]
        };
        
    }

    componentDidMount() {
        fetch(`https://apismk.herokuapp.com/jurusan/${this.state.id}`)
          .then(res => res.json())
          .then(
            (data) => {
              this.setState({
                jurusan: data
              });
            },                
            (error) => {
              console.log(error)   
            }
          )
      }

    render() {
        const {classes}= this.props
        const {jurusan} = this.state
        return (
                <Container fixed className={classes.cardGrid}  style={{marginTop:10}}>
                   <Typography variant="h4" component="h1" className={classes.page}>Detail Jurusan</Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            title={jurusan.nama_jurusan}
                            align="center"
                            />
                        <CardMedia
                            className={classes.cardMedia}
                            image={jurusan.image_jurusan}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography>
                               {jurusan.deskripsi_jurusan}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
        );
    }
}

export default withStyles(Styles)(DetailJurusan);