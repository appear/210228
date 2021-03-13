import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { ROUTES } from './constants'

import WebtoonPage from './pages/webtoon'
import MainPage from './pages/main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path={ROUTES.WEBTOON.MAIN}>
          <WebtoonPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
