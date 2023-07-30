import { styled } from "@/src/styles";


export const FooterContainer = styled('footer', {
    width: '100%',
    padding:'1rem 0', 
    bottom: '0%',

    borderTop: '2px solid rgba(13, 8, 66, 0.10)',

    ul:{
        display: 'flex',
        listStyleType: 'none',
    },
})

export const FooterContentLayout = styled('div', {
    maxWidth: 1240,
    width: '100%',
    height: '100%',

    margin: '0 auto',
    padding: '0 1rem',

    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',

    '@bp3': {
        justifyContent: 'center',
    }
})

export const List = styled('ul', {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem 3rem',
    flexWrap: 'wrap',

    li: {
        cursor: "pointer",
    },

    '@bp3': {
        justifyContent: 'center',
    }
})