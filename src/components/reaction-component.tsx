import React, { FC, useState, useRef } from 'react'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import ReactionPanel from './reaction-panel'
import Hint from './hint'

const Wrapper = styled.div`
  user-select: none;
  position: relative;
`

const Button = styled.button``

const ReactionComponent: FC = () => {
  const wrapperRef = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [emotion, setEmotion] = useState<Emotion | null>(null)

  useOnClickOutside(wrapperRef, () => {
    setOpen(false)
  })

  const handleChange = (emotion: Emotion) => {
    setEmotion(emotion)
    setOpen(false)
  }

  return (
    <Wrapper ref={wrapperRef}>
      <ReactionPanel isVisible={isOpen} onChange={handleChange} />

      {isOpen ? (
        <Hint>Slide cursor across</Hint>
      ) : (
        <Button onClick={() => setOpen(true)}>Like</Button>
      )}
    </Wrapper>
  )
}

export default ReactionComponent
