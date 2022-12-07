import { styled } from '@src/stitches.config';
import { flexCenter } from '../style/flex';

export const Nav = styled('div', {
    ...flexCenter,
    justifyContent: 'flex-start',
    zIndex: '1',
    height: '5rem',
    width: '$full',
    color: 'white',
    position: 'absolute',
    bottom: '4px',
    backgroundColor: '$bgPrimary',
    borderRadius: '999px',

    '@media (max-width: 900px)': {
        padding: '0 1rem',
    },
    '@media (min-width: 900px)': {
        padding: '0 2rem',
    },
});
