import React, { FC, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const colors = {
  like: '#6687C4',
  love: '#EF5368',
  haha: '#FFD872',
  angry: '#F9AE65',
}

const Button = styled.button<{ emotion?: Emotion }>`
  font-size: 16px;
  padding: 15px 20px;
  background: transparent;
  border-radius: 5px;
  text-transform: capitalize;
  border: 1px solid ${({ emotion }) => (emotion ? colors[emotion] : '#dfe5ea')};
  color: ${({ emotion }) => (emotion ? colors[emotion] : 'black')};
  font-weight: ${({ emotion }) => (emotion ? 'bold' : 'regular')};
`

const LikeButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { emotion?: Emotion }
> = props => {
  return <Button {...props}>{props.emotion || 'like'}</Button>
}

export default LikeButton
