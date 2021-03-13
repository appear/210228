import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../constants'

function Header() {
  return (
    <div>
      <Link to={ROUTES.WEBTOON.MAIN}>홈</Link>
      <Link to={ROUTES.WEBTOON.WEEKDAY}>요일별</Link>
      <Link to={ROUTES.WEBTOON.FINISH}>완결</Link>
      <Link to={ROUTES.WEBTOON.GENRE}>베스트도전</Link>
    </div>
  )
}

export default Header
