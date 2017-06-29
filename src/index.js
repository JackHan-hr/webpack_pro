import React from 'react'
import ReactDOM from 'react-dom'

import RootRouter from './config/Route-Config'

import 'antd/dist/antd.less'

ReactDOM.render(
  <div>
    {RootRouter}
  </div>,
  document.getElementById('app')
)
