import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import ListSites from './components/ListSites';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "rss",
      listSites: [],
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

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Header page={this.state.page} onChange={this.handleChangePage} />
        <section>
          <ListSites list={this.state.listSites}/>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
