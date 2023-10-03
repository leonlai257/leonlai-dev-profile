import { styled } from '@src/styles/stitches.config'

export const Square = styled('div', {
  position: 'relative',
  display: 'flex',
  justify: 'center',
  items: 'center',
  overflow: 'hidden',
  w: ['32px'],
  h: ['32px'],
  variants: {
    size: {
      sm: {
        w: ['12px'],
        h: ['12px'],
        px: ['6px']
      },
      md: {
        w: ['24px'],
        h: ['24px'],
        px: ['12px']
      },
      lg: {
        w: ['40px'],
        h: ['40px'],
        px: ['20px']
      },
      xl: {
        w: ['70px'],
        h: ['70px'],
        px: ['35px']
      }
    },

    color: {
      primary: {
        gradient: '$gradient-primary-button'
      },
      black: {
        bg: '$black'
      },
      green: {
        bg: '$status-green'
      },
      red: {
        bg: '$status-red'
      },
      yellow: {
        bg: '$status-yellow'
      }
    }
  }
})
