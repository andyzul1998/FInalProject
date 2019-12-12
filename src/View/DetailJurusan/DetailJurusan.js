import React, { Component } from 'react';
import {Container,Grid,Typography,withStyles,Button,TextField,Box,Card,CardContent,CardActions,CardMedia,CardHeader} from '@material-ui/core'
import {Styles} from './Style';

class DetailJurusan extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
        
    }
    render() {
        const {classes}= this.props
        return (
                <Container fixed className={classes.cardGrid}  style={{marginTop:10}}>
                   <Typography variant="h4" component="h1" className={classes.page}>Detail Jurusan</Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            title="Jurusan"
                            align="center"
                            />
                        <CardMedia
                            className={classes.cardMedia}
                            image={require("../../Images/sea.jpg")}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography>
                               Deksripsi dari jurusan sadjklajdkljaskd jsanja jshadkjhasdjkdash kdjklajsdklasj jsadkljsadkljsakljd ilsajdkljaskldjaskld klsjdkljasdkljasd
                               asjdkjasdlkjkasdj kasjdlkajsdkljaskld ksajdkljasdkljasd kjsadkjaskdjklasdj lkasjdksajdklsajnsandjsa sjadklasjdkljsa 
                               jkashdjkashdjhds
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
        );
    }
}

export default withStyles(Styles)(DetailJurusan);