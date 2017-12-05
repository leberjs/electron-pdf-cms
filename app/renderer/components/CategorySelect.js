import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  container: {
    flexGrow: 1,
    position: 'relative'
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  textField: {
    minWidth: 300,
    marginBottom: 15
  },
})

/** renders */

function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query)
  const parts = parse(suggestion.label, matches)

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
              <strong key={index} style={{ fontWeight: 500 }}>
                {part.text}
              </strong>
            )
        })}
      </div>
    </MenuItem>
  )
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  )
}

class CategorySelect extends Component {
  constructor() {
    super()

    this.state = {
      value: '',
      suggestions: []
    }

    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.handleQuerySelect = this.handleQuerySelect.bind(this)
  }


  /** events */

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    })
  }

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    })
  }

  handleQueryInput(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  handleQuerySelect(value) {
    if (value === '') { return }
    this.setState({ value })
    this.props.openResultsModal(value)
  }

  // handleQuerySelect = (value) => {
  //   if (value === '') { return }
  //   this.setState({ value })
  //   this.props.openResultsModal(value)
  // }

  getSuggestionValue = (suggestion) => {
    this.handleQuerySelect(suggestion.label)

    return suggestion.label
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    let count = 0

    return inputLength === 0
      ? []
      : this.props.categories.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      })
  }

  render() {
    const { classes } = this.props

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: 'Select a Category...',
          value: this.state.value,
          onChange: this.handleQueryInput
        }}
      />
    )
  }
}

export default withStyles(styles)(CategorySelect)
