import { styled } from '@src/styles/stitches.config'

export const LinkButton = styled('a', {
  display: 'flex',
  flexDir: 'row',
  my: 'auto',
  textAlign: 'center',
  cursor: 'pointer',
  fontFamily: '$primary',
  items: 'center',
  '&:hover': {
    // textDecoration: 'underline',
    filters: '$drop-shadow-md',
    opacity: '$hover'
  },

  variants: {
    style: {
      nav: {
        text: ['15px'],
        line: ['20px']
      }
    }
  }
})
