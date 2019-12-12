export const Styles = theme => ({
    wrapper:{
      
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border:'2px solid black',
      borderRadius:30,
      height:420,
      marginBottom: theme.spacing(8),
      backgroundColor:'rgba(177,218,191,0.8)'
    },
    avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link:{
      color:'red'
    },
    txtarea:{
        width:'100%'
    },
}); 