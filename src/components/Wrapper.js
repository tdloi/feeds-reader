import React from 'react';
import { withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const sitesWrapperStyle = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 240,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 320,
    },
    backgroundColor: theme.palette.background.paper,
    borderRight: 'solid #757575',
  },
});

const wrapperStyle = theme => ({
  root: {
    width: '100%',
    minHeight: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
});

function SitesWrapperComponent({ classes, children }) {
  return <section className={classes.root}>{children}</section>;
}

SitesWrapperComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

function WrapperComponent({ classes, children }) {
  return <div className={classes.root}>{children}</div>;
}
WrapperComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SitesWrapper = withStyles(sitesWrapperStyle)(SitesWrapperComponent);
const Wrapper = withStyles(wrapperStyle)(WrapperComponent);

export { SitesWrapper, Wrapper };
