import React, { useState, FC } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

const Wrapper = styled.p``

const AnimatedWrapper = animated(Wrapper)

// TODO: use keyframes
const Hint: FC = () => {
  const [flipped, setFlipped] = useState(false)
  const wrapperStyle = useSpring({
    opacity: flipped ? 1 : 0.5,
    onRest: () => {
      setFlipped(!flipped)
    },
  })

  return (
    <AnimatedWrapper style={wrapperStyle}>Slide cursor across</AnimatedWrapper>
  )
}

export default Hint
