import React from 'react';
import Footer from '../Footer/Footer'
import Home from '../../View/Home/Home'
import Login from '../../View/Login/Login'
import Register from '../../View/Register/Register'
import LupaPassword from '../../View/Register/LupaPassword'
import Kontak from '../../View/Kontak/Kontak'
import News from '../../View/News/News'
import DetailNews from '../../View/DetailNews/DetailNews'
import Jurusan from '../../View/Jurusan/Jurusan'
import DetailJurusan from '../../View/DetailJurusan/DetailJurusan'
import Materi from '../../View/Materi/Materi'
import DetailMateri from '../../View/DetailMateri/DetailMateri'
// import rootAdmin from '../../View/Dashboard/Admin/Admin'
import { Styles } from './Style';
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, withStyles, Grid, CssBaseline, Hidden, Typography } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class rootWeb extends React.Component {
  render() {
    const { classes } = this.props
    return (
      // <Router>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <Grid container>
                  <Grid item md={4} xs={6} sm={6} lg={4}>
                    <NavLink to="/">
                      <img className={classes.LogoImage} src={require("../../Images/Afc-logo.png")} alt="logo" />
                    </NavLink>
                  </Grid>
                    <Grid item md={4} xs={12} lg={4} className={classes.gridLink}>
                      <NavLink to="/" exact className={classes.link}>Home</NavLink>
                      <NavLink to="/jurusan" className={classes.link}>Jurusan</NavLink>
                      <NavLink to="/materi" className={classes.link}>Materi</NavLink>
                      <NavLink to="/news" className={classes.link}>News</NavLink>
                      <NavLink to="/kontak-kami" className={classes.link}>Kontak Kami</NavLink>
                    </Grid>
                  <Grid item md={4} xs={6} sm={6} lg={4} className={classes.gridIcon}>
                    <NavLink className={classes.linkbutton} to="/login">Login</NavLink>
                    <NavLink className={classes.linkbutton} to="/daftar-akun">Daftar</NavLink>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
          <main style={{ marginTop: 70, minHeight: '50xvh' }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/daftar-akun" component={Register} />
              <Route path="/lupa-password" component={LupaPassword} />
              <Route path="/kontak-kami" component={Kontak} />
              <Route path="/news" component={News} />
              <Route path="/detail-news/:_id" component={DetailNews} />
              <Route path="/jurusan" component={Jurusan} />
              <Route path="/detail-jurusan/:_id" component={DetailJurusan} />
              <Route path="/materi" component={Materi} />
              <Route path="/detail-materi" component={DetailMateri} />
              {/* <Route path="/dashboard-admin/" component={rootAdmin} /> */}
            </Switch>
          </main>
          <Footer />
        </React.Fragment>
      // </Router>
    );
  }
}

export default withStyles(Styles)(rootWeb);
