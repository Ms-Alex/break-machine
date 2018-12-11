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

  render() {
    return (
      <div className="App">
        <Header />

        <NewBreak />
        <hr />
        <YourBreaks />

        <Footer />
      </div>
    );
  }
}

export default App;
