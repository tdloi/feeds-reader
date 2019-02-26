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
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  componentDidMount() {
    this.setState({
      listSites: getListSites(this.state.page),
    });
  }

  handleChangePage(currentPage) {
    this.setState({
      page: currentPage,
      listSites: getListSites(currentPage),
    });
  }

  handleAddSite(site) {
    const listSites = localStorage.getItem(this.state.page);
    if (listSites !== null) {
      const dupplicate = JSON.parse(listSites).filter(
        item => item.url === site.url
      );
      if (dupplicate.length !== 0) return;
    }

    // for reddit page, use url of subreddit as name
    if (!site.name) {
      site.name = site.url;
    }

    let list = JSON.parse(listSites) || [];
    list.push(site);
    localStorage.setItem(this.state.page, JSON.stringify(list));
    this.setState({
      listSites: list,
    });
  }

  handleSelectSite(site) {
    const url =
      this.state.page === 'reddit'
        ? `https://reddit.com${site.url}.json`
        : site.url;
    this.setState(
      {
        siteUrl: url,
      },
      () => {
        fetchData(url, this.state.page).then(res => {
          let list = getItemList(this.state.page, res);
          if (list === undefined) {
            list = [];
          }
          this.setState({
            listArticles: list,
          });
        });
      }
    );
  }

  handleDeleteSite(e, site) {
    e.stopPropagation();
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
          <Article lists={this.state.listArticles} />
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
