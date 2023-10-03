import { styled } from '@src/styles/stitches.config'

export const Box = styled('div', {
    position: 'relative',
    display: 'flex',
    width: '100%',
    wordWrap: 'break-word',
    items: 'center',
})

export const HBox = styled(Box, {
    variants: {
        direction: {
            rowReverse: {
                flexDirection: 'row-reverse',
            },
        },
    },
})

export const VBox = styled(Box, {
    flexDirection: 'column',
    variants: {
        direction: {
            columnReverse: {
                flexDirection: 'column-reverse',
            },
        },
    },
})

export const FormBox = styled('form', {
    display: 'flex',
    w: '100%',
    wordWrap: 'break-word',
    items: 'center',
    flexDirection: 'column',
})
