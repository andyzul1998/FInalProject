import React from 'react';
import {Typography,withStyles,Grid,Container,Box} from '@material-ui/core'
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
            <div className={classes.footerCont}>
            <Container fixed style={{borderTop:'2px solid'}}>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={3} className={classes.footerGrid}>
                        <Typography></Typography>
                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footerGrid}>
                       
                        <Typography component="h1" variant="h5" className={classes.Judul}>
                            Alamat
                        </Typography>
                        <Typography component="h1" variant="h5" className={classes.isi}>
                            Jl.Abarokah No.89
                        </Typography>

                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footerGrid}>
                       
                        <Typography component="h1" variant="h5" className={classes.Judul}>
                            Visi & Misi
                        </Typography>
                        <Typography component="h1" variant="h5" className={classes.isi}>
                            1.Mencerdsakan Bangsa
                        </Typography>
                        
                    </Grid>
                    <Grid item md={3} xs={3} className={classes.footer4}>
                        <Box className={classes.box}>
                            <img src={require("../../Images/logo-telkom.png")}/>
                        </Box>
                        <Box style={{display:'flex',justifyContent:'center'}}>
                        <Typography component="h1" align="left" style={{width:150,display:'flex',justifyContent:'center'}}>
                            Copyright 2019 AFC School Indonesia All Base.
                        </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            </div>
            </React.Fragment>
        );
    }
    
}

export default withStyles(Styles)(Footer);