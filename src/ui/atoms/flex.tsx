import { styled } from '@src/stitches.config';

export const Flex = styled('div', {
    display: 'flex',

    // Reset
    boxSizing: 'border-box',

    variants: {
        direction: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
            rowReverse: {
                flexDirection: 'row-reverse',
            },
            columnReverse: {
                flexDirection: 'column-reverse',
            },
        },
        align: {
            start: {
                alignItems: 'flex-start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'flex-end',
            },
            stretch: {
                alignItems: 'stretch',
            },
            baseline: {
                alignItems: 'baseline',
            },
        },
        justify: {
            start: {
                justifyContent: 'flex-start',
            },
            stretch: {
                justifyContent: 'stretch',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap',
            },
            wrap: {
                flexWrap: 'wrap',
            },
            wrapReverse: {
                flexWrap: 'wrap-reverse',
            },
        },
        gap: {
            1: { gap: '$1' },
            2: { gap: '$2' },
            3: { gap: '$3' },
            4: { gap: '$4' },
            5: { gap: '$5' },
            6: { gap: '$6' },
            7: { gap: '$7' },
            8: { gap: '$8' },
            9: { gap: '$9' },
            10: { gap: '$10' },
            11: { gap: '$11' },
            12: { gap: '$12' },
            14: { gap: '$14' },
            16: { gap: '$16' },
            20: { gap: '$20' },
            24: { gap: '$24' },
            28: { gap: '$28' },
            32: { gap: '$32' },
            36: { gap: '$36' },
            40: { gap: '$40' },
            44: { gap: '$44' },
            48: { gap: '$48' },
            52: { gap: '$52' },
            56: { gap: '$56' },
            60: { gap: '$60' },
            64: { gap: '$64' },
            72: { gap: '$72' },
            80: { gap: '$80' },
            96: { gap: '$96' },
        },
    },
    defaultVariants: {
        align: 'stretch',
        justify: 'start',
        wrap: 'noWrap',
    },
});

export const Row = styled(Flex, {
    flexDirection: 'row',
});

export const Column = styled(Flex, {
    flexDirection: 'column',
});
