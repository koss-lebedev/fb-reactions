import React, { FC } from 'react'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Reaction from './reaction'

const Wrapper = styled.div<{ isVisible: boolean }>`
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  display: inline-block;
  border-radius: 30px;
  padding: 0 5px;
  position: absolute;
  bottom: 30px;
  pointer-events: ${props => (props.isVisible ? 'auto' : 'none')};
  position: absolute;
  left: 0;
  width: 240px;
  height: 67px;
`

const Inner = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
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
      <Inner>
        {reactions.map(reaction => (
          <Reaction
            key={reaction.value}
            image={reaction.image}
            value={reaction.value}
            onChange={() => onChange(reaction.value)}
          />
        ))}
      </Inner>
    </AnimatedWrapper>
  )
}

export default ReactionPanel
