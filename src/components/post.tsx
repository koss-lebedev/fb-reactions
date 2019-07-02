import React from 'react'
import styled from 'styled-components'
import ReactionComponent from './reaction-component'

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #dfe5ea;
  padding: 5px 20px 20px;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Image = styled.img`
  width: -webkit-fill-available;
  margin: 0 -20px 20px;
`

const Text = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: #5e636f;
`

const Post = () => {
  return (
    <Wrapper>
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Text>
      <Image src="/fat-shiba.jpg" />
      <ReactionComponent />
    </Wrapper>
  )
}

export default Post
