import { styled } from '@src/stitches.config';
import { Label } from '@src/components/atoms/Label';

export const Button = styled(Label, {
    color: '$textPrimary',
    backgroundColor: '$bgPrimary',
    fontWeight: 'light',
    padding: '1rem',
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '$bgPrimaryLight',
    },

    variants: {
        background: {
            transparent: {
                backgroundColor: 'transparent',
            },
            gray: {
                backgroundColor: 'gray',
                '&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'white',
                },
            },
        },
        color: {
            primary: {
                color: '$textPrimary',
            },
            secondary: {
                color: '$textSecondary',
            },
        },
    },
});
