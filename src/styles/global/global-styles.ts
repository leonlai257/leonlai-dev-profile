import { globalCss } from '../stitches.config'

export const globalStyles = globalCss({
    '@font-face': [
        {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: '400',
            src: "url('https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2'), format('woff2')",
        },
        {
            fontFamily: 'Roboto Mono',
            fontStyle: 'normal',
            fontWeight: '600',
            src: "url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap')",
        },
        {
            fontFamily: 'Manrope',
            fontStyle: 'normal',
            fontWeight: 200,
            fontDisplay: 'swap',
            src: "url(https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59FN_G-bnTfc7AGraJwA.woff2) format('woff2')",
        },
    ],
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    'html, body': {
        fontFamily: '$body',

        /* For removing the arrow button in number input in Chrome, Safari, Edge, Opera */
        'input::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        'input::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        /* For removing the arrow button in number input in Firefox */
        'input[type=number]': {
            '-moz-appearance': 'textfield',
        },

        /* For removing the white scroll bar */
        '::-webkit-scrollbar': {
            width: '0px',
        },

        // WebkitFontSmoothing: 'antialiased',
        // '&::-webkit-scrollbar': {
        //     backgroundColor: 'transparent',
        //     width: 4,
        // },
        // '&::-webkit-scrollbar-track': {
        //     backgroundColor: 'transparent',
        // },
        // '&::-webkit-scrollbar-thumb': {
        //     backgroundColor: '$brand-primary-09',
        // },
    },
    a: {
        color: 'inherit',
        textDecoration: 'none',
    },
    '.main': {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    '.swiper-pagination-bullet': {
        backgroundColor: '#D9D9D9 !important',
        height: '6px !important',
        width: '6px !important',
    },
    '.swiper-pagination-bullet:hover': {
        backgroundColor: '#D9D9D9 !important',
        height: '6px !important',
        width: '6px !important',
        opacity: '0.8 !important',
    },
    '.swiper-pagination-bullet-active': {
        backgroundColor: '#464646 !important',
        height: '6px !important',
        width: '6px !important',
    },
    '.swiper-pagination-bullet-active:hover': {
        backgroundColor: '#464646 !important',
        height: '6px !important',
        width: '6px !important',
        opacity: '0.8 !important',
    },
})
