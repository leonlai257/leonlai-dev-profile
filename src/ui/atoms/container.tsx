import { styled } from '@src/stitches.config';

export const Container = styled('div', {
    // Reset
    boxSizing: 'border-box',

    // Custom
    display: 'block',
    mx: 'auto',
    px: '$2',
    w: '100%',
    maxWidth: '520px',

    '@bp2': {
        px: '$5',
        maxWidth: '900px',
    },
    '@bp3': {
        maxWidth: '1290px',
    },
    '@bp4': {
        maxWidth: '1800px',
    },
});
