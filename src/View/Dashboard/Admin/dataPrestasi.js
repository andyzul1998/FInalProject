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
import { NavLink } from "react-router-dom";
import { Styles } from './Style'


class Prestasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prestasi: []
    }
  }

  hapus = (_id) => {
    fetch(`http://apismk.herokuapp.com/prestasi/${_id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  componentDidMount() {
    fetch("http://apismk.herokuapp.com/prestasi") //fetch API Sliders
      .then(result => result.json())
      .then(
        (data) => {
          this.setState({
            prestasi: data
          });
          console.log(this.state.result)
        },
        (error) => {
          console.log(error)
        }
      );

  }

  render() {
    const { classes } = this.props
    const { prestasi } = this.state
    return (
      <React.Fragment>
        <Box component="div" className={classes.title}>
          <Typography variant="h4" component="h3" align="center">
            Prestasi
      </Typography>
          <hr />
        </Box>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: 'lightGreen' }}>
                  <TableCell align="center" className={classes.textTable}>No</TableCell>
                  <TableCell align="center" className={classes.textTable}>Judul</TableCell>
                  <TableCell align="center" className={classes.textTable}>Deskripsi</TableCell>
                  <TableCell align="center" className={classes.textTable}>Gambar</TableCell>
                  <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: 'lightBlue' }}>
                {prestasi.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell align="center" className={classes.textTable}>{i += 1}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.nama_prestasi}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.deskripsi_prestasi}</TableCell>
                    <TableCell align="center" className={classes.textTable}><img className={classes.img} src={`${item.image_prestasi}`} alt="banner" /></TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() => this.hapus(item._id)}

                      >Delete</Button>
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                      > <NavLink to={{
                        pathname: `/dashboard-admin/data-prestasi/edit-prestasi/${item._id}`
                      }}> EDIT
                        </NavLink></Button>
                    </TableCell>
                  </TableRow>
                )
                )}
              </TableBody>
            </Table>
          </div>
          <Box className={classes.box}>
            <NavLink to="/dashboard-admin/data-prestasi/tambah-data-prestasi">Tambah Data</NavLink>
          </Box>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(Styles)(Prestasi);