import { styled } from "..";

export const SuccessPageContainer = styled('main', {
    // height: 'calc(100vh - 379px)',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    
    img:{
        margin: '4rem 0rem 2rem 0rem',
    },

    p:{
        font: '400 1.5rem Nunito Sans',
        maxWidth: '36.875rem',
        textAlign: 'center',
    },

    span: {
        fontWeight: 700,
        color: '$yellow',
    },

    button: {
        marginTop: '4rem'
    },

    '@bp3': {
        paddingBottom: '4rem'
    }


})