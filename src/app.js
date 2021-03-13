import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { ROUTES } from './constants'

import WebtoonPage from './pages/webtoon'
import MainPage from './pages/main'
import ResetCSS from './components/reset-css'

const Container = styled.div`
  max-width: 720px;
  height: 100vh;
`

function App() {
  return (
    <Container>
      <ResetCSS />
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
    </Container>
  )
}

export default App
