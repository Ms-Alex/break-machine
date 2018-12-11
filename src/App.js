import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NewBreak from './components/NewBreak';
import YourBreaks from './components/YourBreaks';

class App extends Component {
  state = {
    breaks: [],
    functions: [],
    breakNames: []
  }

  // breakObj = {name, url, timer, minOrSec, timerMilli, timerType, active}
  addNewBreak = (obj) => {
    let stateBreaksCopy = [...this.state.breaks];
    let stateBreaksNamesCopy = [...this.state.breakNames];
    this.setState({
      breaks: [...stateBreaksCopy, obj],
      breakNames: [...stateBreaksNamesCopy, obj.name]
    });
    // this.activateBreak(obj);
  }

  activateBreak = (obj) => {
    let functionsCopy = [...this.state.functions];
    if(obj.timerType === "interval"){
      functionsCopy[`${obj.name}`] = setInterval(() => {
        fetch(`https://dzdz136vle.execute-api.us-east-1.amazonaws.com/dev/OpenWindow?url=${obj.url}`).then(res => res.json()).then(data => {
          let fn = new Function(data.function)
          return fn();
        });
      }, obj.timerMilli)
    } else {
      functionsCopy[`${obj.name}`] = setTimeout(() => {
        fetch(`https://dzdz136vle.execute-api.us-east-1.amazonaws.com/dev/OpenWindow?url=${obj.url}`)
          .then(res => res.json())
          .then(data => {
            let fn = new Function(data.function);
            return fn();
          });
      }, obj.timerMilli);
    }

    if(obj.active === 'No'){
      this.findObj(obj.name, 'Yes');
    }

    this.setState({
      functions: functionsCopy
    }, () => { if(obj.name === 'No') this.findObj(obj.name, 'Yes')});
  }

  deActivateBreak = (obj) => {
    // const functionsCopy = [...this.state.functions];

    // if (obj.timerType === "interval"){
    //   clearInterval(functionsCopy[`${obj.name}`]);
    // } else {
    //   clearTimeout(functionsCopy[`${obj.name}`]);
    // }
    // delete functionsCopy[`${obj.name}`];
    // this.setState({
    //   functions: functionsCopy
    // }, () => this.findObj(obj.name, 'No'));
    console.log('hi');
  }

  clickTest = () => {
    fetch(`https://dzdz136vle.execute-api.us-east-1.amazonaws.com/dev/OpenWindow?url=https://www.youtube.com/watch?v=ApXoWvfEYVU&list=RDApXoWvfEYVU&start_radio=1`)
      .then(res => res.json())
      .then(data => {
        let fn = new Function(data.function);
        return fn();
      });
  }

  findObj = (objName, changeStr) => {
    const stateBreaksCopy = [...this.state.breaks];
    const newBreaks = stateBreaksCopy.map(b => b.name !== objName ? b : {...b, active: changeStr});
    this.setState({
      breaks: newBreaks
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="conainer">
        <Header />
        <button onClick={this.clickTest}>Click Me!</button>

        <NewBreak addNewBreak={this.addNewBreak} breakNames={this.state.breakNames} />
        <hr />
        <YourBreaks breaks={this.state.breaks} activateBreak={this.activateBreak} deActivateBreak={this.deActivateBreak} />

        <Footer />
      </div>
    );
  }
}

export default App;
