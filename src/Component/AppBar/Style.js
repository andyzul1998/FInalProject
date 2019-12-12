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
    
        LogoImage : {
           width:120,
           margin:20
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
            marginRight:12,
            color: 'white',
            textDecoration: 'none',
            padding:5,
            '&:hover,&.active,&.active:hover' : {
                backgroundColor:'aqua',
                borderRadius:5,
                color:'black',
                padding:7
            }

            },
            
        contLink:{
            justifyContent:'center'
        },
        linkbutton:{
            textDecoration:'none',
            backgroundColor:'white',
            borderRadius:5,
            marginLeft:10,
            fontWeight:'bold',
            color: 'black',
            padding:5,
            '&:hover,&.active,&.active:hover' : {
                backgroundColor:'aqua',
                borderRadius:5,
                color:'black',
            
            }

        },
        button:{
            borderRadius:10,
            '&:hover,&.active,&.active:hover' : {
                backgroundColor:'aqua',
                color:'black',
                padding:7
            }

        }

      }); 

