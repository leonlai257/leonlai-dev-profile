import { styled } from '@src/stitches.config';
import { flexCenter } from '../style/flex';

export const FlexBox = styled('div', {
  ...flexCenter,

  variants: {
    size: {
      full: {
        width: '$full',
        height: '$full',
      },
    },
    type: {
      menu: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '$full',
        flexDirection: 'column',
      },
    },
    background: {
      default: {},
      blur: {
        backdropFilter: 'blur(10px)',
      },
    },
    transition: {
      true: {
        transition: 'all 600ms ease',
      },
    },
  },
});
