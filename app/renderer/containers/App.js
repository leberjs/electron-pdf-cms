import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import CategorySelect from '../components/CategorySelect'
import SearchBox from '../components/SearchBox'
import RootDirManager from '../components/RootDirManager'

import { sGet, sSet } from '../../utils/settings.util'
import { sDeleteAll } from '../../utils/dev.util'

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
  constructor() {
    super()

    this.state = {
      rootDir: false
    }

    this.setRootDir = this.setRootDir.bind(this)
  }

  /** lifecycle */

  componentDidMount() {
    sDeleteAll()
    this.setState({ rootDir: sGet('root-dir') }, () => { console.log(this.state.rootDir) })
  }

  /** events */

  setRootDir(newDir) {
    sSet('root-dir', newDir)
    this.setState({ rootDir: newDir })
  }

  render() {
    const { classes } = this.props

    if (!this.state.rootDir) {
      return (
        <RootDirManager rootDir={this.state.rootDir} setRootDir={this.setRootDir} />
      )
    }

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