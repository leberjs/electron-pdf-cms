import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  layout: {
    margin: {
      top: 45,
      right: 30,
      left: 30
    }
  }
})

class SearchBox extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }

    this.handleQueryInput = this.handleQueryInput.bind(this)
  }

  handleQueryInput(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  render() {
    return (
      <div className="container">
        <h2>Search By Name</h2>
        <TextField
          hintText="Enter Search Query"
          floatingLabelText="Enter Search Query"
          floatingLabelFixed={true}
        />
      </div>
    )
  }
}

//export default SearchBox
export default withStyles(styles)(SearchBox)
