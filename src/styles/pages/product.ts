import { styled } from "..";

export const ProductPageContainer = styled('main', {
    width: '100%',
    display: 'flex',

    justifyContent: 'space-between',
    alignItems: 'center',
    gap:'4.5rem',
    // flexWrap: 'wrap',

    height: 'calc(100% - 239px)',

    '@bp3': {
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export const ProductContainer = styled('div', {
    flex: 1,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

    img:{
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
        transitionDuration: '.2s',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
})

export const ProductDetail = styled('div', {
    flex:1,

    display: 'flex',
    flexDirection: 'column',

    span: {
        margin: '1rem 0rem 2.5rem 0rem',
        font: '700 2rem Nunito Sans',
        color: '$yellow',
    },

    p:{
        font: '400 1.125rem Nunito Sans', 
        lineHeight: 1.6,
    },

    button:{
        marginTop: '4rem',
    },

    '@bp3': {
        maxWidth: 500,
        paddingBottom: '4rem'
    }
})