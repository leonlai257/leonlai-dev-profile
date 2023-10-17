import { styled } from '@src/styles/stitches.config';

export const Text = styled('div', {
    textAlign: 'left',
    fontFamily: '$primary',
    color: '$textPrimary',

    variants: {
        responsive: {
            headline: {
                text: ['28px', '28px', '36px'],
                fontWeight: 700,
            },
            title: {
                text: ['16px', '16px', '24px'],
                fontWeight: 600,
            },
            label: {
                text: ['12px', '12px', '16px'],
                fontWeight: 600,
            },
            body: {
                text: ['12px', '12px', '16px'],
                fontWeight: 400,
            },
        },
        domain: {
            card: {
                text: ['8px', '8px', '14px', '16px'],
                color: '#070707',
                fontWeight: 600,
                fontFamily: '$mono',
                textTransform: 'none',
                textShadow:
                    '2px 2px 4px rgba(255, 244, 143, 0.40), -2px -2px 4px rgba(255, 244, 143, 0.40)',
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
});
