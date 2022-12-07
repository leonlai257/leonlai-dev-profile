import { styled } from '@src/stitches.config';
import { flexCenter } from '../style/flex';

export const Label = styled('div', {
    ...flexCenter,
    margin: '0.5rem',
    padding: '0.5rem',
    height: '2rem',
    borderRadius: '999px',
    color: '$textPrimary',
    fontSize: '$xs',
    fontWeight: '400',
    variants: {
        position: {
            projectName: {
                padding: '0.2rem',
                fontSize: '25px',
                fontWeight: '700',
            },
        },
    },
});
