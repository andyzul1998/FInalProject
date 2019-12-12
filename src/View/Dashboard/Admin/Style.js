export const Styles = theme => ({
  root: {
      flexWrap: 'wrap'
  },
  appBar : {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // backgroundColor: 'red',
      backgroundImage:'linear-gradient(to top, #00000000 0, #2d2d2d 130%)'

  },
  toolbar: {
      flexWrap: 'wrap',
  },

  gridLogo : {
      margin:'auto'

  },
  LogoImage : {
     width:120,
  },
  gridLink : {
      display:'flex',
      justifyContent:'center',
      margin:'auto'
  },
  gridIcon : {
      display:'flex',
      justifyContent:'flex-end',
      margin:'auto'
  },
  link: {
      fontSize:15,
      textTransform:'uppercase',
      color: 'black',
      textDecoration: 'none',
      '&:hover' : {
          textDecoration:"underline"
      },
  contLink:{
      justifyContent:'center'
  }
  },
  
  login:{
    color:'white'
  },
  paper:{
    width: 115,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:'rgba(255,255,155,0.4)',
    borderRadius:10
  },
  cont:{
    marginTop:80,
  },
  gridCont:{
    border:'1px solid',
    minHeight:400,
    borderRadius:10
  },
  gridPaper:{
      height:'100%'
  },
  //Style DataTabel
  title:{
    background: 'black',
    color:'white',
  },
  textTable:{
    color:'black'
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
  img:{
      height:100
  },
  box:{
    height:100,
    width:100,
    display:'flex',
    alignItems:'center'
  },
  //Form
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  txtarea:{
    width:'100%'
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
    },
}); 

