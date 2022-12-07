import { styled } from '@src/stitches.config';

export const Grid = styled('div', {
    display: 'grid',
    variants: {
        gap: {
            0: {
                gap: '0px',
            },
            1: {
                gap: '$1',
            },
            2: {
                gap: '$2',
            },
            3: {
                gap: '$3',
            },
            4: {
                gap: '$4',
            },
            5: {
                gap: '$5',
            },
            6: {
                gap: '$6',
            },
            7: {
                gap: '$7',
            },
            8: {
                gap: '$8',
            },
            9: {
                gap: '$9',
            },
            10: {
                gap: '$10',
            },
        },
        cols: {
            1: {
                gridTemplateColumns: '1fr',
            },
            2: {
                gridTemplateColumns: 'repeat(2, 1fr)',
            },
            3: {
                gridTemplateColumns: 'repeat(3, 1fr)',
            },
            4: {
                gridTemplateColumns: 'repeat(4, 1fr)',
            },
            5: {
                gridTemplateColumns: 'repeat(5, 1fr)',
            },
            6: {
                gridTemplateColumns: 'repeat(6, 1fr)',
            },
            7: {
                gridTemplateColumns: 'repeat(7, 1fr)',
            },
            8: {
                gridTemplateColumns: 'repeat(8, 1fr)',
            },
            9: {
                gridTemplateColumns: 'repeat(9, 1fr)',
            },
            10: {
                gridTemplateColumns: 'repeat(10, 1fr)',
            },
            11: {
                gridTemplateColumns: 'repeat(11, 1fr)',
            },
            12: {
                gridTemplateColumns: 'repeat(12, 1fr)',
            },
        },
        rows: {
            1: {
                gridTemplateRows: '1fr',
            },
            2: {
                gridTemplateRows: 'repeat(2, 1fr)',
            },
            3: {
                gridTemplateRows: 'repeat(3, 1fr)',
            },
            4: {
                gridTemplateRows: 'repeat(4, 1fr)',
            },
            5: {
                gridTemplateRows: 'repeat(5, 1fr)',
            },
            6: {
                gridTemplateRows: 'repeat(6, 1fr)',
            },
            7: {
                gridTemplateRows: 'repeat(7, 1fr)',
            },
            8: {
                gridTemplateRows: 'repeat(8, 1fr)',
            },
            9: {
                gridTemplateRows: 'repeat(9, 1fr)',
            },
            10: {
                gridTemplateRows: 'repeat(10, 1fr)',
            },
            11: {
                gridTemplateRows: 'repeat(11, 1fr)',
            },
            12: {
                gridTemplateRows: 'repeat(12, 1fr)',
            },
        },
    },
});

export const GridItem = styled('div', {
    variants: {
        colStart: {
            '-1': {
                gridColumnStart: -1,
            },
            1: {
                gridColumnStart: 1,
            },
            2: {
                gridColumnStart: 2,
            },
            3: {
                gridColumnStart: 3,
            },
            4: {
                gridColumnStart: 4,
            },
            5: {
                gridColumnStart: 5,
            },
            6: {
                gridColumnStart: 6,
            },
            7: {
                gridColumnStart: 7,
            },
            8: {
                gridColumnStart: 8,
            },
            9: {
                gridColumnStart: 9,
            },
            10: {
                gridColumnStart: 10,
            },
            11: {
                gridColumnStart: 11,
            },
            12: {
                gridColumnStart: 12,
            },
        },
        rowStart: {
            '-1': {
                gridRowStart: -1,
            },
            1: {
                gridRowStart: 1,
            },
            2: {
                gridRowStart: 2,
            },
            3: {
                gridRowStart: 3,
            },
            4: {
                gridRowStart: 4,
            },
            5: {
                gridRowStart: 5,
            },
            6: {
                gridRowStart: 6,
            },
            7: {
                gridRowStart: 7,
            },
            8: {
                gridRowStart: 8,
            },
            9: {
                gridRowStart: 9,
            },
            10: {
                gridRowStart: 10,
            },
            11: {
                gridRowStart: 11,
            },
            12: {
                gridRowStart: 12,
            },
        },
        colEnd: {
            1: {
                gridColumnEnd: 1,
            },
            2: {
                gridColumnEnd: 2,
            },
            3: {
                gridColumnEnd: 3,
            },
            4: {
                gridColumnEnd: 4,
            },
            5: {
                gridColumnEnd: 5,
            },
            6: {
                gridColumnEnd: 6,
            },
            7: {
                gridColumnEnd: 7,
            },
            8: {
                gridColumnEnd: 8,
            },
            9: {
                gridColumnEnd: 9,
            },
            10: {
                gridColumnEnd: 10,
            },
            11: {
                gridColumnEnd: 11,
            },
            12: {
                gridColumnEnd: 12,
            },
        },
        rowEnd: {
            1: {
                gridRowEnd: 1,
            },
            2: {
                gridRowEnd: 2,
            },
            3: {
                gridRowEnd: 3,
            },
            4: {
                gridRowEnd: 4,
            },
            5: {
                gridRowEnd: 5,
            },
            6: {
                gridRowEnd: 6,
            },
            7: {
                gridRowEnd: 7,
            },
            8: {
                gridRowEnd: 8,
            },
            9: {
                gridRowEnd: 9,
            },
            10: {
                gridRowEnd: 10,
            },
            11: {
                gridRowEnd: 11,
            },
            12: {
                gridRowEnd: 12,
            },
        },
        colSpan: {
            1: {
                gridColumnEnd: 'span 1',
            },
            2: {
                gridColumnEnd: 'span 2',
            },
            3: {
                gridColumnEnd: 'span 3',
            },
            4: {
                gridColumnEnd: 'span 4',
            },
            5: {
                gridColumnEnd: 'span 5',
            },
            6: {
                gridColumnEnd: 'span 6',
            },
            7: {
                gridColumnEnd: 'span 7',
            },
            8: {
                gridColumnEnd: 'span 8',
            },
            9: {
                gridColumnEnd: 'span 9',
            },
            10: {
                gridColumnEnd: 'span 10',
            },
            11: {
                gridColumnEnd: 'span 11',
            },
            12: {
                gridColumnEnd: 'span 12',
            },
        },
        rowSpan: {
            1: {
                gridRowEnd: 'span 1',
            },
            2: {
                gridRowEnd: 'span 2',
            },
            3: {
                gridRowEnd: 'span 3',
            },
            4: {
                gridRowEnd: 'span 4',
            },
            5: {
                gridRowEnd: 'span 5',
            },
            6: {
                gridRowEnd: 'span 6',
            },
            7: {
                gridRowEnd: 'span 7',
            },
            8: {
                gridRowEnd: 'span 8',
            },
            9: {
                gridRowEnd: 'span 9',
            },
            10: {
                gridRowEnd: 'span 10',
            },
            11: {
                gridRowEnd: 'span 11',
            },
            12: {
                gridRowEnd: 'span 12',
            },
        },
    },
});
