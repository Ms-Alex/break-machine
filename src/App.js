import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NewBreak from './components/NewBreak';
import YourBreaks from './components/YourBreaks';

class App extends Component {
  state = {
    breaks: []
  }

  // breakObj = {name, url, timer, minOrSec, timerMilli, timerType, active}
  addNewBreak = (obj) => {
    let stateCopy = [...this.state.breaks]
    this.setState({
      breaks: [...stateCopy, obj]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="conainer">
        <Header />

        <NewBreak addNewBreak={this.addNewBreak} />
        <hr />
        <YourBreaks breaks={this.state.breaks} />

        <Footer />
      </div>
    );
  }
}

export default App;
