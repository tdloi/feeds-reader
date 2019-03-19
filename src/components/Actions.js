import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

import ActionsButton from './ActionsButton';
import { RSSInput, RedditInput } from './ActionsInput';

const styles = theme => ({
  root: {
    borderBottom: '2px solid #757575',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    maxWidth: '85%',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class Actions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false,
      site: {
        name: '',
        url: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickButtonNew = this.handleClickButtonNew.bind(this);
    this.handleClickButtonEdit = this.handleClickButtonEdit.bind(this);
  }

  // close form or cancel edit action on changing page
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({
        add: false,
        site: {
          name: '',
          url: '',
        },
      });
    }
  }

  handleClickButtonNew() {
    if (this.state.add) {
      // Save
      this.props.onAddSite(this.state.site);
    }

    this.setState({
      add: !this.state.add,
      site: {
        name: '',
        url: '',
      },
    });
  }

  handleClickButtonEdit() {
    if (this.state.add) {
      this.setState({
        add: false,
      });
    } else {
      this.props.onToggleEdit();
    }
  }

  handleInputChange(e) {
    this.setState({
      site: {
        ...this.state.site,
        [e.target.name]: e.target.value || '',
      },
    });
  }

  renderInput() {
    if (this.state.add) {
      if (this.props.page === 'rss')
        return (
          <RSSInput
            onChange={this.handleInputChange}
            value={this.state.site.name}
            url={this.state.site.url}
          />
        );
      return (
        <RedditInput
          onChange={this.handleInputChange}
          url={this.state.site.url}
        />
      );
    }
  }

  // buttonEdit will be used to cancel action when in Add/Edit mode,
  // so it need to change its variant and color to suit with its function
  getButtonEditProps() {
    const cancelButton = {
      value: 'Cancel',
      icon: CloseIcon,
      variant: 'contained',
      color: 'secondary',
    };

    if (this.state.add) {
      return cancelButton;
    }
    if (this.props.isEditing) {
      return Object.assign(cancelButton, { value: 'Close' });
    }

    return {
      value: 'Edit',
      icon: EditIcon,
      variant: 'outlined',
      color: 'primary',
    };
  }

  isButtonNewDisabled() {
    if (this.props.isEditing) return true;
    if (!this.state.add) return;

    const { name, url } = this.state.site;
    if (this.props.page === 'reddit') {
      return url === '';
    }

    return name === '' || url === '';
  }

  render() {
    const { classes } = this.props;
    const buttonNew = this.state.add ? 'Save' : 'New',
      buttonNewIcon = this.state.add ? SaveIcon : AddIcon;
    const buttonEdit = this.getButtonEditProps();

    return (
      <div className={classes.root}>
        <div className={classes.buttonGroup}>
          <ActionsButton
            value={buttonNew}
            icon={buttonNewIcon}
            onClick={this.handleClickButtonNew}
            disabled={this.isButtonNewDisabled()}
          />
          <ActionsButton {...buttonEdit} onClick={this.handleClickButtonEdit} />
        </div>
        <div className={classes.input}>{this.renderInput()}</div>
      </div>
    );
  }
}

Actions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actions);
