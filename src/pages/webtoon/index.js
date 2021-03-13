import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ROUTES } from '../../constants'

import WeekdayPage from './weekday'
import HomePage from './home'
import FinishPage from './finish'
import GenrePage from './genre'
import DetailPage from './detail'

function WebtoonPage() {
  return (
    <Switch>
      <Route exact path={ROUTES.WEBTOON.MAIN}>
        <HomePage />
      </Route>
      <Route path={ROUTES.WEBTOON.WEEKDAY}>
        <WeekdayPage />
      </Route>
      <Route path={ROUTES.WEBTOON.FINISH}>
        <FinishPage />
      </Route>
      <Route path={ROUTES.WEBTOON.GENRE}>
        <GenrePage />
      </Route>
      <Route path={`${ROUTES.WEBTOON.DETAIL}/:id`}>
        <DetailPage />
      </Route>
    </Switch>
  )
}

export default WebtoonPage
