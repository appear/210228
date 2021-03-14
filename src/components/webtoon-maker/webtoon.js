import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 15px;
  margin-bottom: 20px;
`

const Image = styled.img``

function Webtoon({ webtoon }) {
  const { title, author, description, imageUrl } = webtoon

  return (
    <Container>
      <div>
        <Image src={imageUrl} alt={title} />
      </div>
      <div>
        {title} / {author}
      </div>
      <div>{description}</div>
    </Container>
  )
}

export default Webtoon
