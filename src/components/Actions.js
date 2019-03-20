import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';

import ActionsButton from './ActionsButton';
import { RSSInput, RedditInput } from './ActionsInput';
import { fetchData } from '../utils';
import { isValidRSS } from '../utils/rss';

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
      error: null,
      isValidURL: false,  // Valid RSS URL or subreddit is existed
      isFetchingURL: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClickButtonNew = this.handleClickButtonNew.bind(this);
    this.handleClickButtonEdit = this.handleClickButtonEdit.bind(this);
    this.validateURL = debounce(this.validateURL, 1000);
  }

  // close form or cancel edit action on changing page
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.setState({
        add: false,
        site: { name: '', url: '', },
        error: null,
        isValidRSS: false,
      });
    }
  }

  handleClickButtonNew() {
    if (this.state.add) {
      this.props.onAddSite(this.state.site);
    }

    this.setState({
      add: !this.state.add,
      site: { name: '', url: '', },
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
      error: null,
      isValid: false,
    })
    if (e.target.value && e.target.name === 'url') this.validateURL(e.target.value);
  }

  validateURL = async (url) => {
    this.setState({ isFetchingURL: true });
    const fetchUrl = this.props.page === 'reddit'
      ? `https://reddit.com/r/${url}.json`
      : url
    const data = await fetchData(fetchUrl, this.props.page);
    const isValid = this.props.page === 'reddit'
      ? data.error !== 404
      : isValidRSS(data)
    const errorMessage = this.props.page === 'reddit'
      ? 'subreddit does not exist'
      : 'Invalid RSS url'

    if (isValid) {
      this.setState({
        error: null,
        isValid: true,
        isFetchingURL: false,
      })
    }
    else {
      this.setState({
        error: errorMessage,
        isValid: false,
        isFetchingURL: false,
      })
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
    if (!this.state.isValid) return true;

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
            isLoading={this.state.isFetchingURL}
            disabled={this.isButtonNewDisabled()}
          />
          <ActionsButton {...buttonEdit} onClick={this.handleClickButtonEdit} />
        </div>
        <div className={classes.input}>
          {this.state.add &&
            (this.props.page === 'rss' ? (
              <RSSInput
                onChange={this.handleInputChange}
                value={this.state.site.name}
                url={this.state.site.url}
                error={this.state.error}
              />
            ) : (
              <RedditInput
                onChange={this.handleInputChange}
                url={this.state.site.url}
                error={this.state.error}
              />
            ))}
        </div>
      </div>
    );
  }
}

Actions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actions);
