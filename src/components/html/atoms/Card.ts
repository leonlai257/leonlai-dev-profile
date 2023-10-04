import { styled } from '@src/styles/stitches.config'

export const Card = styled('div', {
    display: 'flex',
    w: '100%',
    bg: '$white',
    color: '$title',
    rounded: '$card',
    justify: 'center',
    boxShadow: '$card',
})

export const HCard = styled(Card, {
    variants: {
        direction: {
            rowReverse: {
                flexDirection: 'row-reverse',
            },
        },
        style: {
            contact: {
                justify: 'start',
                gapX: '12px',
                w: ['146px', '146px', '146px', '292px'],
                p: ['12px'],
                rounded: '$xs',
                bg: '$bgTertiary',
                boxShadow: '0px 6px 24px 0px rgba(255, 255, 255, 0.10)',
            },
            'contact-new': {
                justify: 'center',
                gapX: '12px',
                w: ['146px', '146px', '146px', '292px'],
                p: ['12px'],
                rounded: '$xs',
                bg: '#28252F',
                boxShadow: '0px 6px 24px 0px rgba(255, 255, 255, 0.10)',
            },
        },
    },
})

export const VCard = styled(Card, {
    flexDirection: 'column',
    variants: {
        direction: {
            columnReverse: {
                flexDirection: 'column-reverse',
            },
        },
        style: {
            mainContainer: {
                p: ['12px', '12px', '20px 40px', '32px 80px'],
                bg: ['rgba(196, 196, 196, 0.10)'],
                boxShadow: '0px 0px 24px 6px rgba(255, 255, 255, 0.25)',
                gapY: '28px',
            },
        },
        popup: {
            wallet: {
                backgroundColor: '$bgSecondary',
                w: ['247px', '385px', '413px'],
                borderTop: '3.5px solid $primary',
                padding: '32px',
                rounded: '0',
            },
        },
    },
})
