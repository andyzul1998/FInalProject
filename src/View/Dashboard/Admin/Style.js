const drawerWidth = 240;

export const Styles = theme => ({
  rootUtama: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
   width:'100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
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
    //Dashboard
    gridItem:{
      border:'3px solid black',
      borderRadius:10
    },
  gridDash:{
    display: 'flex',
    alignItems:'center',
    borderBottom:'3px solid',
  },

}); 

