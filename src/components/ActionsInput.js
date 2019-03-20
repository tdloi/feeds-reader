import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  error: {
    color: 'red',
  },
});

class ActionsInputRSS extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={e => this.props.onSubmit(e)}>
        <TextField
          fullWidth
          className={this.props.classes.root}
          value={this.props.value}
          label="site name"
          margin="normal"
          name="name"
          onChange={this.props.onChange}
        />
        <TextField
          fullWidth
          className={this.props.classes.root}
          value={this.props.url}
          label="url"
          margin="normal"
          name="url"
          onChange={this.props.onChange}
        />
        {this.props.error && (
          <FormHelperText
            className={`${this.props.classes.root} ${this.props.classes.error}`}
          >
            {this.props.error}
          </FormHelperText>
        )}
      </form>
    );
  }
}

class ActionsInputReddit extends React.Component {
  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={e => this.props.onSubmit(e)}>
        <TextField
          fullWidth
          className={this.props.classes.root}
          value={this.props.value}
          label="subreddit: reactjs"
          margin="normal"
          name="url"
          onChange={this.props.onChange}
        />
        {this.props.error && (
          <FormHelperText
            className={`${this.props.classes.root} ${this.props.classes.error}`}
          >
            {this.props.error}
          </FormHelperText>
        )}
      </form>
    );
  }
}

ActionsInputRSS.propTypes = {
  classes: PropTypes.object.isRequired,
};

ActionsInputReddit.propTypes = {
  classes: PropTypes.object.isRequired,
};

const RSSInput = withStyles(styles)(ActionsInputRSS);
const RedditInput = withStyles(styles)(ActionsInputReddit);

export { RSSInput, RedditInput };
