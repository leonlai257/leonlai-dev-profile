import { keyframes, styled } from '@src/stitches.config';

export enum AnimationTypes {
    FADEIN = 'fadeIn',
    FADEOUT = 'fadeOut',
    TRANSITION = 'transition',
}

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const fadeOut = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});

const transition = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0 },
});

export const Animation = styled('div', {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    'background-color': 'black',
    'z-index': '0',
    opacity: '0',
    pointerEvents: 'none',

    animation: `${fadeIn} 1s ease-in-out`,

    variants: {
        type: {
            fadeIn: {
                animation: `${fadeIn} 1s forwards`,
            },
            fadeOut: {
                animation: `${fadeOut} 1s forwards`,
            },
            transition: {
                transition: `${transition} 2s forwards`,
            },
        },
    },
});
