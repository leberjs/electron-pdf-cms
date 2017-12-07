import React, { Component } from 'react'
import ReactModal from 'react-modal'
// import Dialog, { DialogTitle } from 'material-ui/Dialog'
import { Document } from 'react-pdf/build/entry.webpack'
//import { Document, Page } from 'react-pdf'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  modalClass: {
    position: 'fixed',
    maxHeight: 100,
    maxwidth: 500
  }
})

class PDFModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      file: './pdf-sample.pdf'
    }
  }

  render() {
    const { classes } = this.props

    // return (
    //   <Dialog>
    //     <DialogTitle>Set backup account</DialogTitle>
    //     <div>
    //       Test
    //     </div>
    //   </Dialog>
    // )
  }

  render() {
    const { classes, file } = this.props

    return (
      <ReactModal
        isOpen={this.props.isOpen}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            position: 'absolute',
            backgroundColor: 'lightgrey'
          },
          content: {
            color: 'rgb(48, 63, 89)'
          }
        }}
      >
        {file}
        <Document>

        </Document>
      </ReactModal>
    )
  }
}

export default withStyles(styles)(PDFModal)
