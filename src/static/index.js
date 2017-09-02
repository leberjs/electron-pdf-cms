import React from 'react'
import { render } from 'react-dom'

import App from '../containers/App'

require('./fonts/roboto.scss')
require('./app.scss')

const Root = () => (
  <App />
)

render(<Root />, document.querySelector('#root'))