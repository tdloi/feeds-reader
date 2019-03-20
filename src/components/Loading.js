import React from 'react';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';

const style = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '250px',
    margin: 'auto',
  },
  circle: {
    margin: 'auto',
  }
});

function Loading({ classes }) {
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.circle} />
    </div>
  );
}

Loading.prototype = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Loading);
