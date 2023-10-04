import { styled } from '@src/styles/stitches.config'

export const InputField = styled('input', {
    boxShadow: 'none',
    borderStyle: 'none',
    border: '1px solid',
    textColor: '$textPrimary',
    background: '$white',
    p: ['12px 16px'],
    h: '100%',
    w: '100%',
    text: ['16px'],
    rounded: '$card-xs',
    '&::placeholder': {
        textColor: '$textPrimary',
    },
    '&:hover': {
        outline: 'none',
    },
})
