import { styled } from '@src/styles/stitches.config'

export const Button = styled('button', {
    display: 'flex',
    pos: 'relative',
    p: ['8px 20px'],
    // bg: '$bgPrimary',
    rounded: '$button',
    fontFamily: '$primary',
    gradient: '$primary',
    justifyContent: 'center',
    cursor: 'pointer',
    borderStyle: 'none',
    '&:hover': {
        boxShadow: '$lg',
        opacity: '$hover',
    },
    variants: {
        style: {
            primary: {
                color: '$textPrimary',
                gradient: '$gradient-primary-button',
            },
            secondary: {
                color: '$textPrimary',
                bg: 'transparent',
                rounded: '12px',
                border: '1px solid $textPrimary',
            },
            'action-primary': {
                p: ['4px 16px'],
                color: '$white',
                gradient: '$gradient-primary-button',
                rounded: '$button-action',
                border: '1px solid $primary',
            },
            'action-secondary': {
                p: ['4px 16px'],
                color: '$textSecondary',
                bg: '$white',
                rounded: '$button-action',
                border: '1px solid $primary',
            },
            tg: {
                rounded: '61px',
                bg: '#559FD7',
                boxShadow: '0px 4px 24px 0px rgba(155, 155, 155, 0.25)',
            },
        },
        size: {
            sm: {
                p: ['6px 10px'],
            },
            md: {
                p: ['8px 16px'],
            },
            lg: {
                p: ['15px 25px'],
            },
        },
    },
})
