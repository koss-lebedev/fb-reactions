import React, { FC } from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Reaction from './reaction'

const Wrapper = styled.div<{ isVisible: boolean }>`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  display: inline-block;
  border-radius: 40px;
  padding: 0 5px;
  position: absolute;
  bottom: 30px;
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  position: absolute;
  left: 0;
  width: 290px;
  height: 60px;
`

const AnimatedWrapper = animated(Wrapper)

type Props = {
  isVisible: boolean
  onChange: (emotion: Emotion) => void
}

const reactions: ReadonlyArray<{ value: Emotion; image: string }> = [
  {
    value: 'like',
    image: '/like.gif',
  },
  {
    value: 'love',
    image: '/love.gif',
  },
  {
    value: 'haha',
    image: '/haha.gif',
  },
  {
    value: 'angry',
    image: '/angry.gif',
  },
]

const ReactionPanel: FC<Props> = ({ isVisible, onChange }) => {
  const panelStyle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translateY(${isVisible ? 0 : 30}px)`,
    config: config.wobbly,
  })

  return (
    <AnimatedWrapper isVisible={isVisible} style={panelStyle}>
      {reactions.map(reaction => (
        <Reaction
          key={reaction.value}
          image={reaction.image}
          value={reaction.value}
          onChange={() => onChange(reaction.value)}
        />
      ))}
    </AnimatedWrapper>
  )
}

export default ReactionPanel
