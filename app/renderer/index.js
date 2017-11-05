import React from 'react'
import { render } from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Root from './containers/Root'

require('../static/fonts/roboto.scss')
require('../static/app.scss')

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

render(
  <MuiThemeProvider theme={theme}>
    <Root />
  </MuiThemeProvider>,
  document.querySelector('#root')
)