import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

import CategorySelect from '../components/CategorySelect'
import SearchBox from '../components/SearchBox'
import RootDirManager from '../components/RootDirManager'

import ResultsModal from '../modals/results.modal'

import { sGet, sSet } from '../../utils/settings.util'
import { getDirectories } from '../../utils/directory.util'
import { setupAutocomplete } from '../../utils/search.util'

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
      rootDir: false,
      categories: [],
      resultsModalIsOpen: false,
      resultsModalVal: ''
    }

    this.setRootDir = this.setRootDir.bind(this)
    this.updateRootDir = this.updateRootDir.bind(this)
    this.updateCategories = this.updateCategories.bind(this)
    this.openResultsModal = this.openResultsModal.bind(this)
    this.closeResultsModal = this.closeResultsModal.bind(this)
  }

  /** lifecycle */

  componentDidMount() {
    //sDeleteAll()
    this.updateRootDir()
  }

  /** events */

  setRootDir(newDir) {
    sSet('root-dir', newDir)
    this.updateRootDir()
  }

  updateRootDir() {
    this.setState({ rootDir: sGet('root-dir') }, () => {
      console.log(this.state.rootDir)
      if (!this.state.rootDir) {
        return
      }

      this.updateCategories(this.state.rootDir)
    })
  }

  updateCategories(dir) {
    let dirs = setupAutocomplete(getDirectories(dir))
    console.log(dirs)
    this.setState({ categories: dirs })
  }

  openResultsModal(selectedCategory) {
    this.setState({ resultsModalIsOpen: true })
    this.setState({ resultsModalVal: selectedCategory });
  }

  closeResultsModal() {
    this.setState({ resultsModalIsOpen: false })
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
        <CategorySelect categories={this.state.categories} openResultsModal={this.openResultsModal} />
        {/* <SearchBox /> */}
        <hr />

        <ResultsModal isOpen={this.state.resultsModalIsOpen} closeResultsModal={this.closeResultsModal} val={this.state.resultsModalVal} />
      </div>
    )
  }
}

export default withStyles(styles)(App)
