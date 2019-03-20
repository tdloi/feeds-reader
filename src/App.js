import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import ListSites from './components/ListSites';
import { Wrapper, SitesWrapper } from './components/Wrapper';
import Actions from './components/Actions';
import Article from './components/Articles';
import { getListSites, getItemList, fetchData } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'rss',
      siteUrl: '',
      listSites: [],
      listArticles: [],
      isEditing: false, // use to toggle delete icon on ListSite
      isLoadingListArticles: false,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.setState({
      listSites: getListSites(this.state.page),
    });
    window.addEventListener('beforeunload', this.handleSaveSitesToLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.handleSaveSitesToLocalStorage
    );
    this.handleSaveSitesToLocalStorage();
  }

  handleChangePage(currentPage) {
    this.handleSaveSitesToLocalStorage();
    this.setState({
      page: currentPage,
      listSites: getListSites(currentPage),
    });
  }

  handleAddSite(newSite) {
    const dupplicate = this.state.listSites.filter(
      site => site.url === newSite.url
    );
    if (dupplicate.length !== 0) return;

    // for reddit page, use url of subreddit as name
    if (!newSite.name) {
      newSite.name = newSite.url;
    }

    this.setState({
      listSites: this.state.listSites.concat(newSite),
    });
  }

  handleSaveSitesToLocalStorage = () =>
    localStorage.setItem(this.state.page, JSON.stringify(this.state.listSites));

  handleSelectSite(site) {
    const url =
      this.state.page === 'reddit'
        ? `https://reddit.com/r/${site.url}.json`
        : site.url;
    this.setState(
      {
        siteUrl: site.url,
        isLoadingListArticles: true,
      },
      () => {
        fetchData(url, this.state.page).then(res => {
          let list = getItemList(this.state.page, res);
          if (list === undefined) {
            list = [];
          }
          this.setState({
            listArticles: list,
            isLoadingListArticles: false,
          });
        });
      }
    );
  }

  handleDeleteSite(e, selectedSite) {
    e.stopPropagation();
    const newListSites = this.state.listSites.filter(
      site => site.url !== selectedSite.url
    );
    this.setState({
      listSites: newListSites,
    });
  }

  handleToggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header page={this.state.page} onChange={this.handleChangePage} />
        <Wrapper>
          <SitesWrapper>
            <div>
              <Actions
                page={this.state.page}
                isEditing={this.state.isEditing}
                onAddSite={site => this.handleAddSite(site)}
                onToggleEdit={() => this.handleToggleEdit()}
              />
              <ListSites
                onClick={site => this.handleSelectSite(site)}
                onClickIcon={(e, site) => this.handleDeleteSite(e, site)}
                list={this.state.listSites}
                isEditing={this.state.isEditing}
              />
            </div>
          </SitesWrapper>
          <Article
            lists={this.state.listArticles}
            isLoading={this.state.isLoadingListArticles}
          />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
