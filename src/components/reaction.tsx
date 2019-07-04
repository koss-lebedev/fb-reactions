import React, { FC } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 60px;
  transition: transform 0.2s;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.3) translateY(-20px);
    z-index: 1;
  }
`

const Image = styled.img`
  width: 100%;
`

const Label = styled.small`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 3px 5px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 10px;
  display: inline-block;
`

const AnimatedLabel = animated(Label)

type Props = {
  image: string
  value: Emotion
  onChange: (value: Emotion) => void
}

const Reaction: FC<Props> = ({ image, value, onChange }) => {
  const [labelStyle, set] = useSpring(() => ({
    opacity: 0,
    scale: 0,
  }))

  const handleEnter = () => {
    set({
      opacity: 1,
      scale: 1,
    })
  }

  const handleLeave = () => {
    set({
      opacity: 0,
      scale: 0,
    })
  }

  return (
    <Wrapper
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onChange(value)}
    >
      <AnimatedLabel style={labelStyle}>{value}</AnimatedLabel>
      <Image src={image} />
    </Wrapper>
  )
}

export default Reaction
