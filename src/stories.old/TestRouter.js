import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'


const history = createBrowserHistory()

const TestRouter = (props) =>
  <Router
    history={history}
    { ...props }
  />

export {
  history,
  TestRouter
}
