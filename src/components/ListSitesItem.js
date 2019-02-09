import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function ListSitesItem(props) {
  return(
    <div>
      <ListItem button>
        <ListItemText primary={props.value} />
      </ListItem>
      <Divider />  
    </div>
  )
}

export default ListSitesItem;
