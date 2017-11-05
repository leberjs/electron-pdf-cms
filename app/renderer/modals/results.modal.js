import React, { Component } from 'react'
import ReactModal from 'react-modal'

class ResultsModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ReactModal isOpen={this.props.isOpen}
        contentLabel="Minimal Modal Example"
        style={{
          overlay: {
            backgroundColor: 'lightgrey'
          },
          content: {
            color: 'rgb(48, 63, 89)'
          }
        }}
      ><h3>{this.props.val}</h3></ReactModal>
    )
  }
}

export default ResultsModal