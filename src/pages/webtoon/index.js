import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ROUTES } from '../../constants'

import Header from '../../components/webtoon/header'

import WeekdayPage from './weekday'
import HomePage from './home'
import FinishPage from './finish'
import GenrePage from './genre'

function WebtoonPage() {
  return (
    <div>
      <Header />
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
      </Switch>
    </div>
  )
}

export default WebtoonPage
