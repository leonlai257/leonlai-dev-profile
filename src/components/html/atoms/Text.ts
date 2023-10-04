import { styled } from '@src/styles/stitches.config'

export const Text = styled('div', {
    my: 'auto',
    textAlign: 'center',
    fontFamily: '$primary',
    color: '$textPrimary',
    whiteSpace: 'nowrap',

    variants: {
        responsive: {
            headline: {
                text: ['24px', '24px', '32px'],
                fontWeight: 600,
            },
            label: {
                text: ['11px', '11px', '16px'],
                fontWeight: 700,
            },
            title: {
                text: ['14px', '14px', '22px'],
                fontWeight: 600,
            },
            body: {
                text: ['12px', '12px', '14px'],
                fontWeight: 500,
            },
        },
        domain: {
            card: {
                text: ['8px', '8px', '14px', '16px'],
                color: '#070707',
                fontWeight: 600,
                fontFamily: '$mono',
                textTransform: 'none',
                textShadow: '2px 2px 4px rgba(255, 244, 143, 0.40), -2px -2px 4px rgba(255, 244, 143, 0.40)',
            },
        },
        dialog: {
            title: {
                text: ['20px'],
                color: '$textPrimary',
                fontWeight: 700,
            },
            content: {
                text: ['16px'],
                color: '$textPrimary',
                whiteSpace: 'pre-line',
            },
        },
        button: {
            search: {
                text: ['18px'],
                letterSpacing: '0.5px',
                color: '$white',
            },
            large: {
                text: ['20px'],
                fontWeight: 500,
            },
            normal: {
                text: ['14px'],
            },
        },
        footer: {
            slogan: {
                text: ['12px', '12px', '12px', '16px'],
                color: '$textPrimary',
                whiteSpace: 'normal',
                textAlign: 'start',
            },
            title: {
                text: ['12px', '12px', '16px', '20px'],
                fontWeight: 700,
                color: '$textPrimary',
            },
            link: {
                text: ['8px', '8px', '14px', '16px'],
                color: '$textPrimary',
            },
            copyright: {
                text: ['10px', '10px', '16px'],
                color: '$textPrimary',
            },
            company: {
                text: ['10px', '10px', '16px'],
                color: '$textPrimary',
                fontWeight: 700,
            },
        },
        style: {
            warning: {
                text: ['14px'],
                fontWeight: 500,
                color: '$warning',
                whiteSpace: 'normal',
                textAlign: 'start',
                textShadow: '$text',
            },
            'warning-wallet': {
                text: ['14px'],
                fontWeight: 500,
                color: '#FF002B',
                whiteSpace: 'normal',
                textAlign: 'start',
                textShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            },
            terms: {
                text: ['14px'],
                textDecoration: 'underline',
                color: '$textSecondary',
            },
        },
    },
})
