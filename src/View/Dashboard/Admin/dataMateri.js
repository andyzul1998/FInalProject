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
import {Styles} from './Style'


class Materi extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      materi : []
    }
  }
  componentDidMount() {
    fetch("http://apismk.herokuapp.com/materi") //fetch API
      .then(result => result.json())
      .then(
        (data) => {
          this.setState({
            materi: data
          });
          console.log(this.state.materi)
        },
        (error) => {
          console.log(error)
        }
      );

  }

  render(){
    const {classes} = this.props
    const {materi} = this.state
  return (
    <React.Fragment>
    <Box component="div" className={classes.title}>
      <Typography variant="h4" component="h3" align="center">
        Materi
      </Typography>
      <hr />
    </Box>
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'lightGreen' }}>
            <TableCell align="center" className={classes.textTable}>No</TableCell>
              <TableCell align="center" className={classes.textTable}>Nama Materi</TableCell>
              <TableCell align="center" className={classes.textTable}>Jurusan</TableCell>
              <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: 'lightBlue' }}>
            {materi.map((item,i) => (
                <TableRow key={i}>
                  <TableCell align="center" className={classes.textTable}>{i+=1}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.nm_materi}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.nm_jurusan}</TableCell>
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
        <NavLink to="/dashboard-admin/data-materi/tambah-data-materi">Tambah Data</NavLink>
      </Box>
    </Paper>
    </React.Fragment>
  );
  }
}

export default withStyles(Styles)(Materi);