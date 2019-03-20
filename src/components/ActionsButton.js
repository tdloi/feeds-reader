import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  progress: {
    margin: theme.spacing.unit,
  },
})


class ActionsButton extends React.Component {  
  render(){
    const { classes } = this.props;
    const Icon = this.props.icon; // icon component from @material-ui/icons
    return(
      <Button
        variant={this.props.variant || "contained"}
        color={this.props.color || "primary"}
        disabled={this.props.disabled || false}
        onClick={this.props.onClick}
        className={classes.button}
      >
        { this.props.isLoading && 
          <CircularProgress className={classes.progress} size="10px" />
        }
        {this.props.value}
        <Icon className={classes.rightIcon} /> 
      </Button>
    )
  }
}

ActionsButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionsButton);
