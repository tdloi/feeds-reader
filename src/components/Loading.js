import React from 'react';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';

const style = theme => ({
  root: {
    margin: 'auto',
  },
});

function Loading({ classes }) {
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

Loading.prototype = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Loading);
