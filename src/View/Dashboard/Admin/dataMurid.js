import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
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
import AddIcon from '@material-ui/icons/Add';
import { Styles } from './Style'


class Murid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listMurid: [],
      _id: ''
    }
  }

  hapus = (_id) => {
    fetch(`https://apismk.herokuapp.com/siswa/${_id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(json => console.log(json))
  }

  componentDidMount() {
    fetch("https://apismk.herokuapp.com/siswa") //fetch API Sliders
      .then(result => result.json())
      .then(
        (data) => {
          this.setState({
            listMurid: data
          });
          console.log(this.state.listMurid)
        },
        (error) => {
          console.log(error)
        }
      );

  }

  render() {
    const { classes } = this.props
    const { listMurid } = this.state
    return (
      <React.Fragment>
        <Box component="div" className={classes.title}>
          <Typography variant="h4" component="h3" align="center">
            Data Murid
      </Typography>
          <hr />
        </Box>
        <Paper className={classes.root}>
          <div className={classes.tableWrapper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: 'lightGreen' }}>
                  <TableCell align="center" className={classes.textTable}>No</TableCell>
                  <TableCell align="center" className={classes.textTable}>Nis</TableCell>
                  <TableCell align="center" className={classes.textTable}>Nama</TableCell>
                  <TableCell align="center" className={classes.textTable}>Tempat Lahir</TableCell>
                  <TableCell align="center" className={classes.textTable}>Tanggal Lahir</TableCell>
                  <TableCell align="center" className={classes.textTable}>Alamat</TableCell>
                  <TableCell align="center" className={classes.textTable}>Jurusan</TableCell>
                  <TableCell align="center" className={classes.textTable}>Email</TableCell>
                  <TableCell align="center" className={classes.textTable}>No.Telp</TableCell>
                  <TableCell align="center" className={classes.textTable}>Password</TableCell>
                  <TableCell align="center" className={classes.textTable}>Foto</TableCell>
                  <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ backgroundColor: 'lightBlue' }}>
                {listMurid.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell align="center" className={classes.textTable}>{i += 1}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.nis}</TableCell>
                    <TableCell align="center" className={classes.textTable}>
                      {item.nm_siswa}
                    </TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.tempat_lahir}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.tgl_lahir}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.alamat}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.jurusan}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.email}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.no_telpon}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.password}</TableCell>
                    <TableCell align="center" className={classes.textTable}><img className={classes.img} src={`${item.foto_siswa}`} alt="banner" /></TableCell>
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
                        pathname: `/dashboard-admin/data-murid/edit-murid/${item._id}`
                      }}> EDIT
                        </NavLink></Button>
                    </TableCell>
                  </TableRow>
                )
                )}
              </TableBody>
            </Table>
          </div>
        </Paper>
        <Box className={classes.box}>
          <NavLink to="/dashboard-admin/data-murid/tambah-data-murid">Tambah Data</NavLink>
        </Box>
      </React.Fragment>
    );
  }
}

export default withStyles(Styles)(Murid);