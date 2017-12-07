import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { withStyles } from 'material-ui/styles'

import { getDirectoryContents } from '../../utils/fs.util'
import { setupModalTable } from '../../utils/search.util'
import colors from '../../utils/colors'

import PDFModal from './pdf.modal'

const styles = (theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  button: {
    color: colors.close
  }
})

class ResultsModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isHovering: false,
      pdfModalIsOpen: false
    }

    this.handleAfterOpen = this.handleAfterOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  /** events */

  handleAfterOpen() {
    const pdfs = getDirectoryContents(this.props.val.filesPath)
    const data = setupModalTable(pdfs, this.props.val.filesPath)
    console.log(data)
    this.setState({ data })
  }

  handleClick() {
    this.setState({ pdfModalIsOpen: true })
  }

  render() {
    const { classes } = this.props

    return (
      <ReactModal
        isOpen={this.props.isOpen}
        onAfterOpen={this.handleAfterOpen}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            backgroundColor: 'lightgrey'
          },
          content: {
            color: 'rgb(48, 63, 89)'
          }
        }}
      >
        <div className={classes.header}>
          <h3>{this.props.val.label}</h3>
          <IconButton aria-label="Close" className={classes.button} onClick={this.props.closeResultsModal}>
            <CloseIcon />
          </IconButton>
        </div>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Preview</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.data.map((d) => {
                return (
                  <TableRow key={d.id}>
                    <TableCell>{d.baseName}</TableCell>
                    <TableCell onClick={this.handleClick}>{d.fullName}</TableCell>
                    <PDFModal isOpen={this.state.pdfModalIsOpen} file={d.path} />
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </ReactModal >
    )
  }
}

export default withStyles(styles)(ResultsModal)
