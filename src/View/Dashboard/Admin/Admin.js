import React from 'react';
import { Styles } from './Style';
import { NavLink } from "react-router-dom";
import { withStyles, Grid, CssBaseline, Paper } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from './Dashboard'
import Murid from './dataMurid'
import Sponsor from './dataSponsor'
import Sliders from './dataSliders'
import Jurusan from './dataJurusan'
import News from './dataNews'
import Materi from './dataMateri'
import Prestasi from './dataPrestasi'
import Promo from './dataPromo'
import Testimoni from './dataTestimoni'
import tambahMurid from './Tambah Data/tambahMurid'
import tambahJurusan from './Tambah Data/tambahJurusan'
import tambahNews from './Tambah Data/tambahNews'
import tambahPrestasi from './Tambah Data/tambahPrestasi'
import tambahPromo from './Tambah Data/tambahPromo'
import tambahSliders from './Tambah Data/tambahSliders'
import tambahSponsor from './Tambah Data/tambahSponsor'
import tambahTestimoni from './Tambah Data/tambahTestimoni'
import tambahMateri from './Tambah Data/tambahMateri'
import editMurid from './Edit Data/editMurid'

class rootAdmin extends React.Component {
  render() {
    const { classes } = this.props
    return (     
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={6}>
          <Grid item md={3} xs={12} lg={3}>
            <Paper className={classes.gridPaper}>
              <List>
                <NavLink to="/dashboard-admin" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Dashboard" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-murid" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Murid" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-materi" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Materi" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-sliders" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Sliders" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-sponsor" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Sponsor" />
                  </ListItem>
                </NavLink>
              </List>
              <Divider />
              <List>
                <NavLink to="/dashboard-admin/data-jurusan" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Jurusan" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-prestasi" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Prestasi" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-news" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="News" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-promo" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Promo" />
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard-admin/data-testimoni" className={classes.link}>
                  <ListItem button>
                    <ListItemText primary="Testimoni" />
                  </ListItem>
                </NavLink>
              </List>
            </Paper>
          </Grid>
          <Grid item md={9} xs={12} lg={9}>
            <Switch>
              <Route path="/dashboard-admin/" exact component={Dashboard} />
              <Route path="/dashboard-admin/data-murid" exact component={Murid} />
              <Route path="/dashboard-admin/data-sponsor" exact component={Sponsor} />
              <Route path="/dashboard-admin/data-sliders" exact component={Sliders} />
              <Route path="/dashboard-admin/data-jurusan" exact component={Jurusan} />
              <Route path="/dashboard-admin/data-news" exact component={News} />
              <Route path="/dashboard-admin/data-materi" exact component={Materi} />
              <Route path="/dashboard-admin/data-prestasi" exact component={Prestasi} />
              <Route path="/dashboard-admin/data-promo" exact component={Promo} />
              <Route path="/dashboard-admin/data-testimoni" exact component={Testimoni} />
              <Route path="/dashboard-admin/data-murid/tambah-data-murid" component={tambahMurid} />
              <Route path="/dashboard-admin/data-jurusan/tambah-data-jurusan" component={tambahJurusan} />
              <Route path="/dashboard-admin/data-news/tambah-data-news" component={tambahNews} />
              <Route path="/dashboard-admin/data-prestasi/tambah-data-prestasi" component={tambahPrestasi} />
              <Route path="/dashboard-admin/data-promo/tambah-data-promo" component={tambahPromo} />
              <Route path="/dashboard-admin/data-materi/tambah-data-materi" component={tambahMateri} />
              <Route path="/dashboard-admin/data-sliders/tambah-data-sliders" component={tambahSliders} />
              <Route path="/dashboard-admin/data-sponsor/tambah-data-sponsor" component={tambahSponsor} />
              <Route path="/dashboard-admin/data-testimoni/tambah-data-testimoni" component={tambahTestimoni} />
              <Route path="/dashboard-admin/data-murid/edit-murid/:_id" component={editMurid} />
            </Switch>
          </Grid>
        </Grid>
      </React.Fragment >
    );
  }
}

export default withStyles(Styles)(rootAdmin);
