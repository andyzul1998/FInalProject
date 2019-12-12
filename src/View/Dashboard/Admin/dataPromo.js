import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {NavLink} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import {Styles} from './Style'


class Promo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      promo : [
        { kode:1, namaPromo:'Teh Gelas', image:'banner-slider.jpg'},
        { kode:2, namaPromo:'Teh Gelas Tawar', image:'banner-slider.jpg'},
        { kode:3, namaPromo:'Teh Gelas Manis', image:'banner-slider.jpg'},
        { kode:4, namaPromo:'Teh Gelas Asin', image:'banner-slider.jpg'},
        { kode:5, namaPromo:'Teh Gelas Basi', image:'banner-slider.jpg'},
        { kode:6, namaPromo:'Teh Gelas Kadaluarsa', image:'banner-slider.jpg'},
      ]
    }
  }
  render(){
    const {classes} = this.props
    const {promo} = this.state
  return (
    <React.Fragment>
    <Box component="div" className={classes.title}>
      <Typography variant="h4" component="h3" align="center">
        Promo
      </Typography>
      <hr />
    </Box>
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'lightGreen' }}>
            <TableCell align="center" className={classes.textTable}>No</TableCell>
              <TableCell align="center" className={classes.textTable}>Nama Promo</TableCell>
              <TableCell align="center" className={classes.textTable}>Image</TableCell>
              <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: 'lightBlue' }}>
            {promo.map(item => (
                <TableRow key={item.kode}>
                  <TableCell align="center" className={classes.textTable}>{item.kode}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.namaPromo}</TableCell>
                  <TableCell align="center" className={classes.textTable}><img className={classes.img} src={require("../../../Images/"+item.image)} alt="banner" /></TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}

                    >Delete</Button>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                    >Edit</Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      <Box className={classes.box}>
        <NavLink to="/dashboard-admin/data-promo/tambah-data-promo">Tambah Data</NavLink>
      </Box>
    </Paper>
    </React.Fragment>
  );
  }
}

export default withStyles(Styles)(Promo);