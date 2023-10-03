import { styled } from '@src/styles/stitches.config'

export const Circle = styled('div', {
  position: 'relative',
  display: 'flex',
  justify: 'center',
  items: 'center',
  rounded: '9999px',
  overflow: 'hidden',
  w: ['32px'],
  h: ['32px'],
  variants: {
    size: {
      xs: {
        w: ['8px'],
        h: ['8px']
      },
      sm: {
        w: ['12px'],
        h: ['12px']
      },
      md: {
        w: ['24px'],
        h: ['24px']
      },
      lg: {
        w: ['48px'],
        h: ['48px']
      },
      loading: {
        w: ['240px'],
        h: ['240px']
      }
    },

    color: {
      loading: {
        bg: '$white'
      },
      primary: {
        gradient: '$gradient-primary'
      },
      'primary-button': {
        gradient: '$gradient-primary-button'
      },
      black: {
        bg: '$black'
      },
      white: {
        bg: '$white'
      },
      green: {
        bg: '$status-green'
      },
      red: {
        bg: '$status-red'
      },
      yellow: {
        bg: '$status-yellow'
      },
      cyan: {
        bg: '$bubble-cyan'
      },
      blue: {
        bg: '$bubble-blue'
      },
      violet: {
        bg: '$bubble-violet'
      }
    }
  }
})
