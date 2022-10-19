import React from 'react'
import styled, {keyframes} from 'styled-components'

const Loader = () => {
  return (
    <Wheel>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f27121"/>
        <stop offset="100%" stopColor="#e94057" />
      </linearGradient>
      <Circle cx="50%" cy="50%" r="30" stroke="url(#gradient)"/>
    </Wheel>
  )
}

const loadingAnimation = keyframes`
  0% {
    /* stroke-dashoffset: 471; */
    transform: rotate(0deg)
  }
  100% {
    /* stroke-dashoffset: 0; */
    transform: rotate(360deg)
  } 
`

const Wheel = styled.svg`
  min-height: 400px;
  width: 100%;
`
const Circle = styled.circle`
  fill: transparent;
  stroke-width: 5px;
  stroke-dasharray: 200;
  stroke-dashoffset: calc(200 / 4);
  animation: ${loadingAnimation} 3s linear infinite;
  transform-origin: 50% 50%;
`
export default Loader