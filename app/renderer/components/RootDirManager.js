import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button';
import Folder from 'material-ui-icons/Folder';

const { dialog } = require('electron').remote

const styles = theme => ({
  layout: {
    height: 300,
    display: 'flex'
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },

  button: {
    margin: {
      bottom: 7
    }
  }
})

class RootDirManager extends Component {
  constructor() {
    super()

    this.chooseDir = this.chooseDir.bind(this)
  }

  /** component events */

  chooseDir() {
    //console.log(dialog.showOpenDialog({ properties: ['openDirectory'] }))
    const newRootDir = dialog.showOpenDialog({ properties: ['openDirectory'] })[0]
    newRootDir !== '' ? this.props.setRootDir(newRootDir) : ''
  }

  render() {
    const { classes, rootDir } = this.props

    return (
      <div className={classes.layout}>
        <div className={classes.item}>
          <Button raised className={classes.button} onClick={this.chooseDir}>
            <Folder />&nbsp;&nbsp;Select root directory
          </Button>
          <em>{rootDir || 'No Directory Set'}</em>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(RootDirManager)