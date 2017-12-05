import React, { Component } from 'react'
import ReactModal from 'react-modal'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import { red } from 'material-ui/colors'
import { withStyles } from 'material-ui/styles'

const styles = (theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },

  button: {
    color: red[500]
  }
})

class ResultsModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <ReactModal
        isOpen={this.props.isOpen}
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
          <h3>{this.props.val}</h3>
          <IconButton aria-label="Close" className={classes.button} onClick={this.props.closeResultsModal}>
            <CloseIcon />
          </IconButton>
        </div>

        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell numeric>Calories</TableCell>
                <TableCell numeric>Fat (g)</TableCell>
                <TableCell numeric>Carbs (g)</TableCell>
                <TableCell numeric>Protein (g)</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </Paper>
      </ReactModal >
    )
  }
}

export default withStyles(styles)(ResultsModal)
