import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Route,Switch} from 'react-router-dom';
import {NavLink} from "react-router-dom";
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
import App from '../../../Component/AppBar/App'
import {Styles} from './Style.js'


class Sidebar extends Component {
  render(){
  const {classes} = this.props

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
            <ListItem button>
              <NavLink to="/dashboard-admin/"  className={classes.link}>
                <ListItemText primary="Dashboard"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-murid/" className={classes.link}>
                <ListItemText primary="Murid"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-materi/" className={classes.link}>
                <ListItemText primary="Materi"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-sliders/"  className={classes.link}>
                <ListItemText primary="Sliders"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-sponsor/" className={classes.link}>
                <ListItemText primary="Sponsor"  />
              </NavLink>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-jurusan/"  className={classes.link}>
                <ListItemText primary="Jurusan"  />
              </NavLink>
            </ListItem>
            <ListItem button>
            <NavLink to="/dashboard-admin/data-prestasi/" className={classes.link}>
                <ListItemText primary="Prestasi"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-news/" className={classes.link}>
                <ListItemText primary="News"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-promo/" className={classes.link}>
                <ListItemText primary="Promo"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/dashboard-admin/data-testimoni/" className={classes.link}>
                <ListItemText primary="Testimoni"  />
              </NavLink>
            </ListItem>
            <ListItem button>
              <NavLink to="/" className={classes.link}>
                <ListItemText primary="Home"  />
              </NavLink>
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Switch>
            <Route path="/dashboard-admin" exact component={Dashboard}/>
            <Route path="/dashboard-admin/data-murid/"    component={Murid}/>
            <Route path="/dashboard-admin/data-sponsor/"   component={Sponsor}/>
            <Route path="/dashboard-admin/data-sliders/"   component={Sliders}/>
            <Route path="/dashboard-admin/data-jurusan/"  component={Jurusan}/>
            <Route path="/dashboard-admin/data-news/"   component={News}/>
            <Route path="/dashboard-admin/data-materi/"   component={Materi}/>
            <Route path="/dashboard-admin/data-prestasi/"   component={Prestasi}/>
            <Route path="/dashboard-admin/data-promo/"  component={Promo}/>
            <Route path="/dashboard-admin/data-testimoni/"  component={Testimoni}/>
            <Route path="/dashboard-admin/data-murid/tambah-data-murid" component={tambahMurid}/>
            <Route path="/dashboard-admin/data-jurusan/tambah-data-jurusan" component={tambahJurusan}/>
            <Route path="/dashboard-admin/data-news/tambah-data-news" component={tambahNews}/>
            <Route path="/dashboard-admin/data-prestasi/tambah-data-prestasi" component={tambahPrestasi}/> 
            <Route path="/dashboard-admin/data-promo/tambah-data-promo" component={tambahPromo}/>
            <Route path="/dashboard-admin/data-materi/tambah-data-materi" component={tambahMateri}/>
            <Route path="/dashboard-admin/data-sliders/tambah-data-sliders" component={tambahSliders}/>
            <Route path="/dashboard-admin/data-sponsor/tambah-data-sponsor" component={tambahSponsor}/>
            <Route path="/dashboard-admin/data-testimoni/tambah-data-testimoni" component={tambahTestimoni}/>
            <Route path="/" component={App}/>
          </Switch>
      </main>
    </div>
  );
}
}

export default withStyles(Styles)(Sidebar)