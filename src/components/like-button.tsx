import React, {
  FC,
  ButtonHTMLAttributes,
  MouseEvent,
  useRef,
  useEffect,
} from 'react'
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
  cursor: pointer;
  outline: none;
  border: 1px solid ${({ emotion }) => (emotion ? colors[emotion] : '#dfe5ea')};
  color: ${({ emotion }) => (emotion ? colors[emotion] : 'black')};
  font-weight: ${({ emotion }) => (emotion ? 'bold' : 'regular')};
`

const LikeButton: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    emotion?: Emotion
    onLongHover?: () => void
  }
> = ({ onLongHover, onClick, emotion, ...props }) => {
  const timeout = useRef<number>()

  const cleanup = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    cleanup()

    if (onClick) {
      onClick(event)
    }
  }
  const handleEnter = () => {
    timeout.current = setTimeout(() => {
      if (onLongHover) {
        onLongHover()
      }
    }, 700)
  }

  const handleLeave = () => {
    cleanup()
  }

  useEffect(() => {
    return cleanup
  }, [])

  return (
    <Button
      {...props}
      emotion={emotion}
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {emotion || 'like'}
    </Button>
  )
}

export default LikeButton
