import React from 'react'
import ReactDOM from 'react-dom'

// import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'

import AppController from './Controllers/AppController'

ReactDOM.render(
  <AppController/>,
  document.getElementById('app')
)
