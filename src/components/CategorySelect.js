import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CategorySelect extends Component {
  constructor() {
    super()

    this.state = {
      value: 1
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, index, value) {
    this.setState({ value })
  }

  render() {
    return (
      <div className="container">
        <h2>Search By Category</h2>
        <SelectField
          floatingLabelText="Choose a Category"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Category A" />
          <MenuItem value={2} primaryText="Category B" />
          <MenuItem value={3} primaryText="Category C" />
        </SelectField>
      </div>
    )
  }
}

export default CategorySelect