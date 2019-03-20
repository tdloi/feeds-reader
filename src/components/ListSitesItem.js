import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core'

const style = {
  icon: {
    'padding': '2px 5px',
    'borderRadius': '20%',
  }
}

function ListSitesItem(props) {
  return (
    <div>
      <ListItem button onClick={props.onClick}>
        <ListItemText primary={props.value} />
        {props.displayIcon && (
          <ListItemIcon onClick={props.onClickIcon}>
            <IconButton className={props.classes.icon}>{<props.icon fontSize="small"/>}</IconButton>
          </ListItemIcon>
        )}
      </ListItem>
      <Divider />
    </div>
  );
}

export default withStyles(style)(ListSitesItem);
