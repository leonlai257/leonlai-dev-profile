import { Box } from '@react-three/drei';
import { styled } from '@src/stitches.config';

export const Fallback = styled(Box, {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    'background-color': 'black',
    'z-index': '0',
    opacity: '0',
    pointerEvents: 'none',
});
