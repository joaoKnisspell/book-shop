import { styled } from "..";

export const IntroduceContainer = styled('main', {
    width: '100%',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2.5rem',

    '@bp2': {
        justifyContent: 'center',
    }
})

export const IntroduceText = styled('div', {
    display: 'block',
    p: {
        lineHeight: 1.4,
        margin: '1.88rem 0 2.5rem 0',
        maxWidth: '28.3125rem',

    },
})

export const IntroduceArt = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '27.6875rem',
    width: '100%',

    img: {
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
    },

    '.img-1': {
        zIndex: 100,
        // '@bp4': {
        //     width: 152,
        //     height: 208,
        // }
    },

    '.img-2': {
        marginLeft: -108,
        zIndex: 50,
        // '@bp4': {
        //     width: 112,
        //     height: 178,
        //     marginLeft: -51
        // }
    },

    '.img-3': {
        marginLeft: -93,
        // '@bp4': {
        //     width: 82,
        //     height: 158,
        //     marginLeft: -36
        // }
    },

    '@bp4': {
        display: 'none'
    }
})