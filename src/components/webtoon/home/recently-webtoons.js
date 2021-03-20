import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { useUserContext } from '../../../contexts/user-context'
import Webtoon from './webtoon'
import { ROUTES } from '../../../constants'

const Container = styled.div`
  padding: 20px 17px;
`

const ScrollContainer = styled.div`
  white-space: nowrap;
  overflow-x: auto;
`

const Title = styled.h3`
  margin: 12px 0;
  font-weight: bold;
`

function RecentlyWebtoons() {
  const {
    state: { user, recentlyViewes },
  } = useUserContext()
  const history = useHistory()

  const moveToWebtoonDetail = (webtoon) => {
    history.push(`${ROUTES.WEBTOON.HOME}/${webtoon.id}`)
  }

  return (
    <Container>
      <Title>{user.name}님의 최근 본 웹툰</Title>

      <ScrollContainer>
        {recentlyViewes.map((webtoon) => {
          return <Webtoon webtoon={webtoon} onClick={moveToWebtoonDetail} />
        })}
      </ScrollContainer>
    </Container>
  )
}

export default RecentlyWebtoons
