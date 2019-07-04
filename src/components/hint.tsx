import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% { opacity: 1 }
  50% { opacity: 0.5 }
  100% { opacity: 1 }
`

const Wrapper = styled.p`
  animation: ${pulse} 1.5s linear infinite;
`

const Hint: FC = () => <Wrapper>Choose your reaction</Wrapper>

export default Hint
