import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Header extends React.Component {
  handleChange(page) {
    this.props.onChange(page);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={this.props.page} 
                onChange={(e, value) => this.handleChange(value)}
          >
            <Tab value="rss" label="RSS" />
            <Tab value="hackernews" label="Hacker News" />
            <Tab value="reddit" label="Reddit" />
          </Tabs>
        </AppBar>        
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
