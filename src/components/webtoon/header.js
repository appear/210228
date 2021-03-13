import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES } from '../../constants'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const Menu = styled(Link)`
  display: block;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 51px;
  white-space: nowrap;

  ${({ on }) =>
    on &&
    `
    color: #00d564;
    border-bottom: 2px solid #00d564;
  `}
`

function Header() {
  const {
    location: { pathname },
  } = useHistory()

  const [menu, setMenu] = useState(pathname)

  const handleMenu = (menu) => {
    setMenu(menu)
  }

  return (
    <Container>
      <Menu
        to={ROUTES.WEBTOON.MAIN}
        on={ROUTES.WEBTOON.MAIN === menu}
        onClick={() => handleMenu(ROUTES.WEBTOON.MAIN)}
      >
        홈
      </Menu>
      <Menu
        to={ROUTES.WEBTOON.WEEKDAY}
        on={ROUTES.WEBTOON.WEEKDAY === menu}
        onClick={() => handleMenu(ROUTES.WEBTOON.WEEKDAY)}
      >
        요일별
      </Menu>
      <Menu
        to={ROUTES.WEBTOON.FINISH}
        on={ROUTES.WEBTOON.FINISH === menu}
        onClick={() => handleMenu(ROUTES.WEBTOON.FINISH)}
      >
        완결
      </Menu>
      <Menu
        to={ROUTES.WEBTOON.GENRE}
        on={ROUTES.WEBTOON.GENRE === menu}
        onClick={() => handleMenu(ROUTES.WEBTOON.GENRE)}
      >
        베스트도전
      </Menu>
    </Container>
  )
}

export default Header
