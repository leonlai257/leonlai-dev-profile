import { styled } from '@src/styles/stitches.config'

export const Line = styled('div', {
  backgroundColor: '$black60'
  // border: '1px solid $black60',
})

export const HLine = styled(Line, {
  w: '100%',
  h: '1px'
})

export const VLine = styled(Line, {
  h: '100%',
  w: '1px'
})
