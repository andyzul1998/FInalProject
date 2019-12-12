export const Styles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    card: {
        height: '100%',
        display: 'flex',
        border:'3px solid black'
        
    },
    gridMedia:{
        borderLeft:'3px solid'
    },
    detail:{
        display:'flex',
        flexDirection:'column'
    },
    cardMedia: {
        margin:20,
        height:300,
        width:560    
    },
    cardContent: {
        flexGrow: 1,
      },
    link:{
        display:'flex',
        justifyContent: 'flex-end'
    },
    page:{
        borderBottom:'2px solid ',
        marginBottom:20
    },
    judul:{
        borderBottom:'1px solid',
        marginBottom:10
    }    
}); 