import { globalCss } from "."
import { styled } from "."

export const GlobalStyles = globalCss({
    '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box',
    },

    'body, button, placeholder, input, textarea': {
        font: '400 1rem Montserrat',
    },

    body: {
        backgroundColor: '$background',
        color: '$textBold',
    },

    button: {
        cursor: 'pointer',
        border: 'none',
    },

    a: {
        textDecoration: 'none',
        color: 'CurrentColor',
    }
})

export const Container = styled('div', {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
})