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
            <Container fixed>
                <Grid container spacing={1}>
                    <Grid md={3} xs={3} className={classes.footer1}>

                    </Grid>
                    <Grid md={3} xs={3} className={classes.footer2}>

                    </Grid>
                    <Grid md={3} xs={3} className={classes.footer3}>

                    </Grid>
                    <Grid md={3} xs={3} className={classes.footer4}>
                        <img src={require("../../Images/logo-telkom.png")}/>
                    </Grid>
                </Grid>
            </Container>
            
      
        );
    }
    
}

export default withStyles(Styles)(Footer);