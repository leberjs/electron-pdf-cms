import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class SearchBox extends Component {
  constructor() {
    super()
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

export default SearchBox