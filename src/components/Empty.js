import React from 'react';
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const style = theme => ({
  root: {
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing.unit,
  },
});

function Empty({ classes, value }) {
  return (
    <div className={classes.root}>
      <Typography>{value}</Typography>
    </div>
  );
}

Empty.prototype = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Empty);
