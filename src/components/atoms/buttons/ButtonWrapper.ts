import { styled } from '@src/styles/stitches.config'

export const ButtonWrapper = styled('div', {
  display: 'flex',
  justify: 'center',
  alignItems: 'center',
  gapX: ['8px'],
  gapY: ['8px'],
  cursor: 'pointer',
  fontFamily: '$primary',
  '&:hover': {
    opacity: '$hover'
  }
})
