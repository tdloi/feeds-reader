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
  const { classes, list } = props;
  return (
    <div className={classes.root}>
      { list.length === 0 ? 
        <div className={classes.emptyItem}>No Items</div>
      :
      <List>
        {list.map((site) =>
          <ListSitesItem key={site.url} value={site.name} />
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
