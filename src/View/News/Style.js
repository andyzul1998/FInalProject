export const Styles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(4)
      },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
    cardContent: {
        flexGrow: 1,
      },
    page:{
        borderBottom:'2px solid ',
        marginBottom:20
    },
    search:{
        float:'right'
    }
}); 