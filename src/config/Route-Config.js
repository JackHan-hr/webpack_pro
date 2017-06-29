import React from 'react'
import {Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router'

const RootRoter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppController }>
      <IndexRoute  component={ HomeController }/>
      <Route path="index"  component={ HomeController }/>
    </Route>
  </Router>
)

export default RootRoter
