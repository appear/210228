import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Webtoon from './webtoon'

import { ROUTES } from '../../../constants'

const Container = styled.div`
  padding: 20px 0;
`

const Title = styled.h3`
  padding: 10px 16px;
`

const ScrollContainer = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`

function NewWebtoon() {
  const [webtoons, setWebtoons] = useState([])

  const history = useHistory()

  useEffect(() => {
    // 1. new data 를 가져온다.
    // 2. 가져온 데이터를 state 로 set 한다.
    const fetchNewWebtoons = async () => {
      const response = await fetch('http://localhost:3000/new') // 10초
      const data = await response.json()

      setWebtoons(data)
    }

    fetchNewWebtoons()
  }, [])

  const moveToWebtoonDetail = (webtoon) => {
    history.push(`${ROUTES.WEBTOON.HOME}/${webtoon.id}`)
  }

  return (
    <Container>
      <Title>이달의 신작</Title>

      <ScrollContainer>
        {webtoons.map((webtoon) => {
          return (
            <Webtoon
              webtoon={webtoon}
              key={webtoon.id}
              onClick={moveToWebtoonDetail}
            />
          )
        })}
      </ScrollContainer>
    </Container>
  )
}

export default NewWebtoon
