import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 80px;
  transition: transform 0.2s;
  position: absolute;
  bottom: -15px;
  text-align: center;

  &:hover {
    transform: scale(2) translateY(-15px);
  }

  ${[0, 1, 2, 3].map(
    item => `
    &:nth-child(${item + 1}) {
      left: ${item * 80 - 10}px;
    }
  `
  )}
`

const Image = styled.img`
  width: 100%;
`

const Label = styled.small`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 3px 5px;
  border-radius: 10px;
`

type Props = {
  image: string
  value: Emotion
  onChange: (value: Emotion) => void
}

const Reaction: FC<Props> = ({ image, value, onChange }) => {
  return (
    <Wrapper onClick={() => onChange(value)}>
      <Label>{value}</Label>
      <Image src={image} />
    </Wrapper>
  )
}

export default Reaction
