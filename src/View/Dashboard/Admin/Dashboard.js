import React, { Component } from 'react';
import { Container, Grid, Typography,withStyles } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People';
import {Styles} from './Style'


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            murid:[],
            jurusan:[],
            sponsor:[],
        }
    }

    componentDidMount() {
        fetch("https://apismk.herokuapp.com/siswa") //fetch API Sliders
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        murid: data
                    });
                },
                (error) => {
                    console.log(error)
                }
            );
        fetch("https://apismk.herokuapp.com/sponsor") //fetch API Sponsor
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        sponsor: data
                    });
                    console.log(this.state.sponsor)
                },
                (error) => {
                    console.log(error)
                }
            );
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
            );
        fetch("https://apismk.herokuapp.com/jurusan") //fetch API News
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        jurusan: data
                    });
                    console.log(this.state.jurusan)
                },
                (error) => {
                    console.log(error)
                }
            );
    }
    render() {
        const {classes} =  this.props
        const {murid,jurusan,sponsor,news,} = this.state
        return (
            <div>
                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item md={4} className={classes.gridItem}>
                            <Typography variant="h2" className={classes.gridDash}>
                                <PeopleIcon style={{fontSize:150}}/>
                                SISWA
                            </Typography>
                            <Typography variant="h2" align="center">
                                {murid.length}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>

                        </Grid>
                        <Grid item md={6}>

                        </Grid>
                        <Grid item md={6}>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(Styles)(Dashboard);