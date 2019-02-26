import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

function ListSitesItem(props) {
  return (
    <div>
      <ListItem button onClick={props.onClick}>
        <ListItemText primary={props.value} />
        {props.displayIcon && (
          <ListItemIcon onClick={props.onClickIcon}>
            <IconButton>{<props.icon />}</IconButton>
          </ListItemIcon>
        )}
      </ListItem>
      <Divider />
    </div>
  );
}

export default ListSitesItem;
