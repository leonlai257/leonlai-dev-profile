import { styled } from '@src/stitches.config';

export const Heading = styled('span', {
    // reset
    m: 0,
    display: 'block',
    fontFamily: '$boston',
    letterSpacing: '$wider',
    variants: {
        as: {
            h1: {
                '@initial': { fontSize: '$xl4' },
                '@bp2': { fontSize: '$xl5' },
                '@bp3': { fontSize: '$xl6' }, // 96px
            },
            h2: {
                '@initial': { fontSize: '$xl3' }, // 30px
                '@bp2': { fontSize: '$xl6' }, // 60 px
                '@bp3': { fontSize: '$xl7' }, // 72px
            },
            h3: {
                '@initial': { fontSize: '$xl3' },
                '@bp2': { fontSize: '$xl5' },
                '@bp3': { fontSize: '$xl6' }, // 60px
            },
            h4: {
                '@initial': { fontSize: '$xl' }, // 24px
                '@bp2': { fontSize: '$xl4' }, // 36px
                '@bp3': { fontSize: '$xl5' }, // 48px
            },
            h5: {
                '@initial': { fontSize: '$xl2' }, // 14px
                '@bp2': { fontSize: '$xl3' }, // 16px
                '@bp3': { fontSize: '$xl4' }, // 36px
            },
            h6: {
                '@initial': { fontSize: '$xl2' }, // 24px
                '@bp3': { fontSize: '$xl3' }, // 30px
            },
        },
    },
});
