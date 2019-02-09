import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSitesItem from './ListSitesItem';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    height: '95vh',
    borderRight: 'solid #757575',
    marginTop: '0.5rem',
  },
  emptyItem: {
    textAlign: 'center',
  }
});

function ListSites(props) {
  const { classes, sites } = props;
  return (
    <div className={classes.root}>
      { sites === undefined ? 
        <div className={classes.emptyItem}>No Items</div>
      :
      <List>
        {sites.map((item) =>
          <ListSitesItem key={item} value={item} />
        )}
      </List>
      }
    </div>
  );
}

ListSites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListSites);
