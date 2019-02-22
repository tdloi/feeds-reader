import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import ListSites from './components/ListSites';
import Actions from './components/Actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "rss",
      listSites: [],
      isEditing: false, // use to toggle delete icon on ListSite
    };
    this.handleChangePage = this.handleChangePage.bind(this);
  }

  getListSites(page) {
    let list = localStorage.getItem(page);
    if (list === null) {
      return []
    }
    return JSON.parse(list);
  }

  componentDidMount() {
    this.setState({
      listSites: this.getListSites(this.state.page),
    })
  }

  handleChangePage(currentPage) {
    this.setState({
      page: currentPage,
      listSites: this.getListSites(currentPage),
    });
  }

  handleAddSite(site) {
    const listSites = localStorage.getItem(this.state.page);
    if (listSites !== null) {
      const dupplicate = JSON.parse(listSites)
                        .filter( item => item.url === site.url )
      if (dupplicate.length !== 0) return;
    }

    // for reddit page, use url of subreddit as name
    if (!site.name) {
      site.name = site.url
    }

    let list = JSON.parse(listSites) || [];
    list.push(site);
    localStorage.setItem(this.state.page, JSON.stringify(list));
    this.setState({
      listSites: list,
    })
  }

  handleToggleEdit() {
    this.setState({
      editing: !this.state.isEditing,
    })
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header page={this.state.page} onChange={this.handleChangePage} />
        <section>
          <Actions 
              page={this.state.page}
              onAddSite={(site) => this.handleAddSite(site)}
              onToggleEdit={() => this.handleToggleEdit()}
          />
          <ListSites 
              list={this.state.listSites}
              isEditing={this.state.isEditing}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default App;
