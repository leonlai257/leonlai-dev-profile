import { styled } from '@src/styles/stitches.config'

export const Overlay = styled('div', {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100dvw',
  height: '100dvh',
  display: 'flex',
  justify: 'center',
  items: 'center',
  backdropFilter: 'blur(3px)',
  zIndex: 999,
  color: 'white'
})

export const OverlayInteract = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: -1
})
