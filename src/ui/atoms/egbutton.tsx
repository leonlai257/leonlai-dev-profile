import { styled } from '@src/stitches.config';

export const Button = styled('button', {
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    border: '1px solid white',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },

    // Custom reset?
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    lineHeight: '1',
    color: 'white',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    cursor: 'pointer',

    // Custom
    px: '18px',
    py: '10px',
    fontFamily: '$conthrax',
    fontSize: '$md',
    fontWeight: 400,
    borderRadius: '$sm',
    textTransform: 'uppercase',
    fontVariantNumeric: 'tabular-nums',

    '&:hover': {
        filter: 'drop-shadow(0px 0px 10px #FFFFFF)',
    },

    '&:disabled': {
        backgroundColor: '$disabledBackground',
        color: '$disabled',
        pointerEvents: 'none',
    },

    variants: {
        primary: {
            true: {
                border: 'none',
                background: 'linear-gradient(180deg, #BA2131 0%, #EE2A3E 100%)',

                '&:hover': {
                    filter: 'none',
                    background: '$primary',
                    boxShadow:
                        '0px 0px 20px rgba(255, 0, 0, 0.5), 0px 0px 30px rgba(255, 0, 0, 0.5)',
                },
            },
        },
        small: {
            true: {
                border: 'none',
                px: '16px',
                py: '3px',
                fontSize: '11px',
            },
        },
        gray: {
            true: {
                borderRadius: '$full',
                backgroundColor: 'rgba(255,255,255,0.4)',
            },
        },
        disabled: {
            true: {
                background: '$disabledBackground',
                color: '$disabled',
                pointerEvents: 'none',
            },
        },
    },
    defaultVariants: {},
});
