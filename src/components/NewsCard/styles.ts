import { styled } from "@/src/styles";

export const NewsCardContainer = styled('article', {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
})

export const NewsDetail = styled('div', {
    maxWidth: '24.125rem',

    h4:{
        // borderBottom: '2px solid $yellow'
    },

    '.line':{
        border: '1px solid $yellow',
        width: 50,
        margin: '1.56rem 0rem'
    },

    p:{
        font: '400 0.875rem Nunito Sans',
    }
})