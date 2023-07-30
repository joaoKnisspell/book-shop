import { styled } from "@stitches/react";

export const ProductContainer = styled('article', {
    // padding: '0.94rem 0rem 0.94rem 0rem',
    // maxWidth: 474,
    // width: '100%',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // justifyContent: 'space-between',
    gap: '1rem',
    // flexWrap: 'wrap'
    flexWrap: 'wrap',
})

export const ProductDetail = styled('div', {
    width: 180,

    display: 'flex',
    flexDirection: 'column',
    gap: '0.94rem',

    p:{
        color: '$textRegular',
        font: '400 0.875rem Nunito Sans',
        overflow: 'hidden',
        height: 60,
        '&::after': {
            content: '+'
        }
    }
})

export const ProductPrice = styled('div', {
    width: '100%',
    marginBottom: '1.56rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})