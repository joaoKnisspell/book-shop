import { styled } from '../../styles/index'

export const Button = styled('button', {
    height: 36,

    backgroundColor: '$yellow',
    borderRadius: '.5rem',
    boxShadow: '0px 0px 0px 0px rgba(254, 175, 56, 0.10), -1px 1px 3px 0px rgba(254, 175, 56, 0.10), -5px 2px 6px 0px rgba(254, 175, 56, 0.09), -12px 5px 8px 0px rgba(254, 175, 56, 0.05), -21px 8px 9px 0px rgba(254, 175, 56, 0.01), -33px 13px 10px 0px rgba(254, 175, 56, 0.00)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    a: {
        color: '$background',
        font: '700 1rem Nunito Sans',
        width: '100%'
    },

    variants:{
        size:{
            default: { width: 171 },
            card: { width: '100%' },
            product: { height: 50 }
        },

        loading: {
            true: {opacity: .8, cursor: 'not-allowed'}
        }

    }
})