import { styled } from "@/src/styles";

export const ProductsSectionContainer = styled('section', {
    margin: '6rem 0rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '@bp1': {
        alignItems: 'center',
    },

    '@bp3': {
        margin: '4rem 0rem'
    }
})

export const ProductsWrapper = styled('div', {
    padding: '0rem 1rem',

    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '3rem 1rem',

    width: '100%',

    '@bp1':{
        justifyContent: 'center',
        gap: '3rem'
    }
})
