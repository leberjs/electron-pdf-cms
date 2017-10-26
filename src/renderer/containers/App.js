import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import CategorySelect from '../components/CategorySelect'
import SearchBox from '../components/SearchBox'

const styles = theme => ({
  layout: {
    margin: {
      top: 45,
      right: 30,
      left: 30
    }
  }
})

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.layout}>
        <CategorySelect />
        {/* <SearchBox /> */}
        <hr />
      </div>
    )
  }
}
export default withStyles(styles)(App)