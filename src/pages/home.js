import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { ROUTES } from '../constants'

const DAY_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']

function HomePage() {
  const weekdayLabel = `${DAY_OF_WEEK[moment().day()]}요웹툰`

  return (
    <div>
      <Link to={ROUTES.WEBTOON.HOME}>웹툰홈</Link> |{' '}
      <Link to={ROUTES.WEBTOON.WEEKDAY}>{weekdayLabel}</Link>
    </div>
  )
}

export default HomePage
