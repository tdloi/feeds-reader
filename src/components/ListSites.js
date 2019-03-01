import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListSitesItem from './ListSitesItem';
import Empty from './Empty';

const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

function ListSites(props) {
  const { classes, list, isEditing, onClick, onClickIcon } = props;
  return (
    <div className={classes.root}>
      {list.length === 0 ? (
        <Empty value="No Item" />
      ) : (
        <List>
          {list.map(site => (
            <ListSitesItem
              key={site.url}
              value={site.name}
              displayIcon={isEditing}
              icon={DeleteIcon}
              onClick={() => onClick(site)}
              onClickIcon={e => onClickIcon(e, site)}
            />
          ))}
        </List>
      )}
    </div>
  );
}

ListSites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListSites);
