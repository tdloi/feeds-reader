import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import github from '../github.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: theme.spacing.unit * 2,
  },
  button: {
    paddingRight: theme.spacing.unit * 3,
    paddingLeft: theme.spacing.unit * 3,
    color: theme.palette.grey.A200,
  },
  imgIcon: {
    width: '20px',
    marginRight: theme.spacing.unit,
    color: theme.palette.grey.A200,
  }

});

class Header extends React.Component {
  handleChange(page) {
    this.props.onChange(page);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.tab}>
          <Tabs
            value={this.props.page}
            onChange={(e, value) => this.handleChange(value)}
          >
            <Tab value="rss" label="RSS" />
            <Tab value="reddit" label="Reddit" />
          </Tabs>
          <div className={classes.right}>
            <Button className={classes.button}
              href="https://github.com/tdloi/feeds-reader"
            >
              <img src={github} alt='github icon' className={classes.imgIcon} />
              Github
            </Button>
          </div>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
