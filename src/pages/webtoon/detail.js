import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -1px;
`
const Description = styled.div`
  font-size: 12px;
`
const Author = styled.div`
  font-size: 12px;
  opacity: 0.4;
`
const Favcount = styled.div`
  font-size: 12px;
`

const Image = styled.img`
  width: 20%;
  border-radius: 2px;
  margin-bottom: 20px;
`

function Detail() {
  const { id } = useParams()
  const [webtoon, setWebtoon] = useState(null)

  useEffect(() => {
    const handleWebtoon = async () => {
      const response = await fetch(`http://localhost:3000/webtoons/${id}`)
      const data = await response.json()

      setWebtoon(data)
    }

    handleWebtoon()
  }, [id])

  if (!webtoon) {
    return null
  }

  const { title, author, description, favcount, imageUrl } = webtoon

  return (
    <Container>
      <Image src={imageUrl} />
      <Description>{description}</Description>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Favcount>{favcount}</Favcount>
    </Container>
  )
}

export default Detail
