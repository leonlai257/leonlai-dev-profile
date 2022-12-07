import { keyframes, styled } from '@src/stitches.config';
import { Box } from './box';

const runningAnimation = keyframes({
    '0%': { backgroundPosition: '9999px' },
    '100%': { backgroundPosition: '-9999px' },
});

export const Running = styled(Box, {
    backgroundColor: 'rgba(0,0,0,0.5)',
    // backgroundImage: `url('/images/warning_tagline.png')`,
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    border: '1px solid white',
    borderWidth: '1px 0',
    transform: 'translate3d(0,0,0)',
    animation: `${runningAnimation} 100s linear infinite`,
    w: '100%',
    flex: 0,
    fb: '33px',
    '@bp3': {
        fb: '67px',
    },
});
