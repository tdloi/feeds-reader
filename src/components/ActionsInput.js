import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

class ActionsInputRSS extends React.Component {
  render() {
    return(
      <form noValidate autoComplete="off">
        <TextField
          fullWidth
          className={this.props.classes.root}
          value={this.props.value}
          label="site name"
          margin="normal"
        />
        <TextField
          fullWidth
          className={this.props.classes.root}
          value={this.props.url}
          label="url"
          margin="normal"
        />
      </form>
    )
  }
}

class ActionsInputReddit extends React.Component {
  render() {
    return(
      <TextField
        fullWidth
        className={this.props.classes.root}
        value={this.props.value}
        label="subreddit"
        margin="normal"
      />
    )
  }
}

ActionsInputRSS.propTypes = {
  classes: PropTypes.object.isRequired,
}

ActionsInputReddit.propTypes = {
  classes: PropTypes.object.isRequired,
}

const RSSInput = withStyles(styles)(ActionsInputRSS);
const RedditInput =  withStyles(styles)(ActionsInputReddit);

export { RSSInput, RedditInput };
