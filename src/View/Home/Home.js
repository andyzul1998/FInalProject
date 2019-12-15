import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Box, Paper, Button } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OwlCaraousel from 'react-owl-carousel2'
import 'react-owl-carousel2/src/owl.theme.default.css'
import 'react-owl-carousel2/lib/styles.css'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Img from 'react-image'
import { Styles } from './Style';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            sponsor: [],
            news: [],
            jurusan: [],
            testimoni: [],
            fasilitas: [],
            open: false
        };

    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    componentDidMount() {
        fetch("https://apismk.herokuapp.com/slider") //fetch API Sliders
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        sliders: data
                    });
                    console.log(this.state.sliders)
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
        fetch("https://apismk.herokuapp.com/fasilitas") //fetch API Sponsor
            .then(result => result.json())
            .then(
                (data) => {
                    this.setState({
                        fasilitas: data
                    });
                    console.log(this.state.fasilitas)
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
        setTimeout(() => {
            this.setState({
                open: true
            })
        }, 6000);
    }

    render() {

        const optionSlider = {
            items: 1,
            loop: true,
            autoplay: true,
            animateIn: 'zoomIn',
            animateOut:'rollOut'
        }

        const optionJurusan = {
            items: 1,
            loop: true,
            dots:false,
            autoplay: true,
            animateIn: 'lightSpeedIn',
            animateOut:'lightSpeedOut'
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        }
        const settingSponsor = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        }

        const { classes } = this.props
        const { sliders, sponsor, open, fasilitas, news, jurusan } = this.state
        return (
            <Container fixed style={{ marginTop: 10 }}>
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={this.handleClose}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <img className={classes.modal_img} src={require('../../Images/Modal-promo.png')} alt="modal" />
                            </div>
                        </Fade>
                    </Modal>
                </div>
                <div>
                    {sliders.length && (
                        <OwlCaraousel options={optionSlider}>
                            {sliders.map((item, i) => (
                                <div style={{ height: '-moz-fit-content' }}>
                                    <Img key={i} className={classes.slider_img} src={`${item.image_slider}`} />
                                </div>
                            ))}
                        </OwlCaraousel>
                    )}
                </div>
                <Grid container spacing={2} style={{ marginTop: 15 }}>
                    <Grid item md={4} xs={12}>
                        <Typography component="h1" variant="h4" style={{ borderRight: '3px solid red' }}>
                            TENTANG SEKOLAH KAMI
                        </Typography>
                        <Typography component="h1" align="justify" style={{ marginTop: 15 }}>
                            Kami adalah sekolah yang bergerak dibidang teknologi informasi, kami sudah berdiri sejak tahun 100 masehi dan masih berdiri
                            kokoh hingga saat ini
                            </Typography>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <img className={classes.slider_img} src={require('../../Images/sekolah.jpg')} alt="sekolah" />
                    </Grid>
                </Grid>
                <div className={classes.txtJurusan}>
                    <Typography component="h1" align="center" variant="h4">
                        PROGRAM STUDI
                            </Typography>
                    <Typography component="h1" align="center" variant="h5">
                        Kami memiliki beberapa Program Studi unggulan yang sudah teruji dan kompenten di bidangnya
                    </Typography>
                </div>

                {jurusan.length && (
                    <OwlCaraousel options={optionJurusan}>
                        {jurusan.map((item, i) => (
                            <Paper style={{ padding: 10 }}>
                                <Grid container spacing={3}>
                                    <Grid item md={8} >
                                        <Img key={i} className={classes.jurusanImg} src={`${item.image_jurusan}`} />
                                    </Grid>
                                    <Grid item md={4} >
                                        <Box style={{ borderLeft: '3px solid red' }}>
                                            <Typography component="h1" variant="h4" align="left" className={classes.txt_jurusan}>
                                                {item.nama_jurusan}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography component="h1" variant="h5" align="left" className={classes.txt_jurusan_deskripsi}>
                                                {(item.deskripsi_jurusan).toString().substring(0, 130)} ...
                                            </Typography>
                                        </Box>
                                        <Box style={{display:'flex' , justifyContent:'end',height:150,alignItems:'end'}}>
                                            <NavLink className={classes.linkJurusan} to={{ pathname: `/detail-jurusan/${item._id}` }}>
                                                <Button variant="contained" color="primary">
                                                    SELENGKAPNYA
                                                </Button>
                                            </NavLink>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Paper>
                        ))}
                    </OwlCaraousel>

                )}

                <Grid container spacing={4} style={{ marginTop: 20 }}>
                    <Grid item md={8} xs={12} >
                        <Slider {...settings} >
                            {fasilitas.map((item, i) => (
                                <div key={i} className={classes.fasilitas} >
                                    <Img className={classes.mitraImg} src={`${item.image_fasilitas}`} />
                                </div>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography component="h1" variant="h4" align="right" style={{ borderLeft: '3px solid red' }}>
                            FASILITAS SEKOLAH KAMI
                            </Typography>
                        <Typography component="h1" align="justify" style={{ marginTop: 15 }}>
                            Fasilitas sekolah kami sangat lengkap dan dapat membuat skill murid-murid meningkat pesat
                            </Typography>
                    </Grid>
                </Grid>
                <Typography component="h1" variant="h4" align="center" style={{ marginTop: 25 }}>
                    MITRA KAMI
                </Typography>
                <Box>
                    <Slider {...settingSponsor} >
                        {sponsor.map((item, i) => (
                            <div key={i} className={classes.mitra}>
                                <Img className={classes.mitraImg} src={`${item.image_sponsor}`} />
                            </div>
                        ))}
                    </Slider>
                </Box>
                <Typography component="h1" variant="h4" align="center" className={classes.berita}>
                    BERITA TERBARU
                </Typography>
                <Box style={{ marginTop: 15 }}>
                    <Slider {...settingSponsor} >
                        {news.map((item, i) => (
                            <div key={i} className={classes.news}>
                                <Paper className={classes.paperNews}>
                                    <Img className={classes.newsImg} src={`${item.image_news}`} />
                                    <Typography componen="h1" variant="h4" align="left" className={classes.judulNews}>
                                        {item.judul_news}
                                    </Typography>
                                    <Box className={classes.boxNews}>
                                        <NavLink className={classes.linkNews} to={{
                                            pathname: `/detail-news/${item._id}`
                                        }}>Read More </NavLink>
                                    </Box>
                                </Paper>
                            </div>
                        ))}
                    </Slider>
                </Box>
            </Container >
        );
    }
}

export default withStyles(Styles)(Home);