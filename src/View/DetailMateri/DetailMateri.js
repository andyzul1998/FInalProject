import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,Box,Card,CardContent,CardActions,CardMedia,CardHeader} from '@material-ui/core'
import {Styles} from './Style';

class DetailMateri extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        
    }
    render() {
        const {classes}= this.props
        return (
                <Container fixed className={classes.cardGrid}  style={{marginTop:10}}>
                    <Grid container className={classes.page}>
                        <Grid item md={6} xs={6} lg={6}>
                            <Typography variant="h4" component="h1" >Detail Materi</Typography>
                        </Grid>
                    </Grid>
                    
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={require("../../Images/rubah.jpg")}
                            title="Judul gambar"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.tanggal}>
                                Jurusan : Kelas  
                            </Typography>
                            <Typography variant="h4" component="h1">
                                Judul Materi Kelas
                            </Typography>
                            <Typography>
                                Matematika , bahasa , IPA, IPS, Jaringan, Teknik Informatika
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
        );
    }
}

export default withStyles(Styles)(DetailMateri);