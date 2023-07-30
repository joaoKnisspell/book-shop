import { createStitches } from "@stitches/react";

export const { 
    config,
    styled, 
    css,
    globalCss, 
    getCssText,
    theme,
    createTheme,
    keyframes
 } = createStitches({
    theme: {
        colors: {
            yellow: '#FFCE1A',
            background: '#FFFFFF',
            textBold: '#0D0842',
            textRegular: 'rgba(13, 8, 66, 0.52)'
        }
    },
    media: {
        bp1: '(max-width: 1161px)',
        bp2: '(max-width: 1022px)',
        bp3: '(max-width: 780px)',
        bp4: '(max-width: 600px)',
    }
})