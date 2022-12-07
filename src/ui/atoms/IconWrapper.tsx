import { styled } from '@src/stitches.config';
import { flexCenter } from '../style/flex';

export const IconWrapper = styled('div', {
  ...flexCenter,
  height: '3rem',
  width: '3rem',

  variants: {
    size: {
      default: {
        height: '3rem',
        width: '3rem',
      },
      small: {
        height: '2rem',
        width: '2rem',
      },
      medium: {
        height: '5rem',
        width: '5rem',
      },
      large: {
        height: '10rem',
        width: '10rem',
      },
    },
  },
});
