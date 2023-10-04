import { styled } from '@src/styles/stitches.config'

export const IconButton = styled('img', {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  height: 'fit-content',
  width: 'fit-content',
  cursor: 'pointer',
  fontFamily: '$primary',
  '&:hover': {
    filters: '$drop-shadow-lg',
    opacity: '$hover'
  }
})
