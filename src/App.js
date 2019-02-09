import React, { Component } from 'react';
import Header from './components/Header';
import ListSites from './components/ListSites';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "rss",
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(currentPage) {
    this.setState({page: currentPage})
  }

  render() {
    return (
      <div className="App">
        <Header page={this.state.page} onChange={this.changePage} />
        { this.state.page !== 'hackernews' &&
          <div>
            <ListSites />
          </div>
        }
      </div>
    );
  }
}

export default App;
