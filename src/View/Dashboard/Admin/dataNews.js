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


class News extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      news : []
    }
  }

  componentDidMount() {
    fetch("https://apismk.herokuapp.com/news") //fetch API
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

  }

  render(){
    const {classes} = this.props
    const {news} = this.state
  return (
    <React.Fragment>
    <Box component="div" className={classes.title}>
      <Typography variant="h4" component="h3" align="center">
        News
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
              <TableCell align="center" className={classes.textTable}>Author</TableCell>
              <TableCell align="center" className={classes.textTable}>Gambar</TableCell>
              <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: 'lightBlue' }}>
            {news.map((item,i) => {
              return(
                <TableRow key={i}>
                  <TableCell align="center" className={classes.textTable}>{i+=1}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.judul_news}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.deskripsi_news}</TableCell>
                  <TableCell align="center" className={classes.textTable}>{item.author}</TableCell>
                  <TableCell align="center" className={classes.textTable}><img className={classes.img} src={`${item.image_news}`} alt="banner" /></TableCell>
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
            )}
            )}
          </TableBody>
        </Table>
      </div>
      <Box className={classes.box}>
        <NavLink to="/dashboard-admin/data-news/tambah-data-news">Tambah Data</NavLink>
      </Box>
    </Paper>
    </React.Fragment>
  );
  }
}

export default withStyles(Styles)(News);