import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import { FormControl, FormHelperText } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

import { getDirectories } from '../../utils/directory.util'
import { sGet } from '../../utils/settings.util'

const styles = theme => ({
  container: {
    margin: {
      top: 45,
      bottom: 50
    }
  },
  formControl: {
    //margin: theme.spacing.unit,
    minWidth: 300,
  }
})

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

class CategorySelect extends Component {
  constructor() {
    super()

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  /** events */

  handleChange(e) {
    if (e.target.value === '') { return }
    this.setState({ value: e.target.value })
    this.props.openResultsModal(e.target.value)
  }

  render() {
    const { classes, categories } = this.props

    return (
      <div className={classes.container}>
        <h2>Search By Category</h2>
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category-select">Select a Category...</InputLabel>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              input={<Input id="category-select" />}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 200,
                  },
                },
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map((val, i) => <MenuItem key={i} value={val}>{val}</MenuItem>)}
            </Select>
          </FormControl>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(CategorySelect)