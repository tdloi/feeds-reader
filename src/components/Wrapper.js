import React from 'react';
import { withStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const sitesWrapperStyle = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: 240,
      height: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 360,
    },
    backgroundColor: theme.palette.background.paper,
    borderRight: 'solid #757575',
  },
});

const wrapperStyle = theme => ({
  root: {
    width: '100%',
    height: '100%',
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
