import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import App from './containers/App'

require('../static/fonts/roboto.scss')
require('../static/app.scss')

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
)

render(<Root />, document.querySelector('#root'))