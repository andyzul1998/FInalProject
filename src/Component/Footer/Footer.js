import React from 'react';
import {Typography,withStyles,Grid,Container} from '@material-ui/core'
import {Styles} from './Style';

       

class Footer extends React.Component {
        
    constructor(props){
        super(props);
        this.state ={
        
        }
       
    }
    
    render(){
        const {classes} = this.props

        return (
            <React.Fragment>
            <div>
            <Container fixed>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={3} className={classes.footer1}>

                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footer4}>
                        <div>
                        <Typography component="h1" variant="h5">
                            Alamat
                        </Typography>
                        <Typography component="h1" variant="h5">
                            Jl.Abarokah No.89
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footer4}>
                        <div>
                        <Typography component="h1" variant="h5">
                            Visi & Misi
                        </Typography>
                        <Typography component="h1" variant="h5">
                            1.Mencerdsakan Bangsa
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footer4}>
                        <img src={require("../../Images/logo-telkom.png")}/>
                    </Grid>
                </Grid>
            </Container>
            </div>
            <div>
                <Typography style={{backgroundColor:'red'}}>
                    Copyright@ afc-school 2019
                </Typography>
            </div>
            </React.Fragment>
        );
    }
    
}

export default withStyles(Styles)(Footer);