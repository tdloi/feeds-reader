import React, { Component } from 'react';
import Header from './components/Header';

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
      </div>
    );
  }
}

export default App;
