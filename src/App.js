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
    this.activateBreak(obj);
  }

  activateBreak = (obj) => {
    const functionsCopy = [...this.state.functions];
    let funcId;
    if(obj.timerType === "interval"){
      funcId = setInterval(() => {
        fetch(`https://aegd3062j8.execute-api.us-east-1.amazonaws.com/prod/OpenWindow?url=${obj.url}`)
          .then(res => res.json())
          .then(data => {
            // eslint-disable-next-line
            let fn = new Function(data.function);
            return fn();
          });
      }, obj.timerMilli)
    } else {
      functionsCopy[`${obj.name}`] = setTimeout(() => {
        fetch(`https://aegd3062j8.execute-api.us-east-1.amazonaws.com/prod/OpenWindow?url=${obj.url}`)
          .then(res => res.json())
          .then(data => {
            // eslint-disable-next-line
            let fn = new Function(data.function);
            this.findObj(obj.name, "No");
            return fn();
          });
      }, obj.timerMilli);
    }
    functionsCopy.push({ [obj.name]: funcId })
    this.setState({
      functions: functionsCopy
    }, () => { if(obj.active === 'No') this.findObj(obj.name, 'Yes')});
    alert("Successfully activated break!");
  }

  deActivateBreak = (obj) => {
    const functionsCopy = [...this.state.functions];
    let fnObjIndex;
    for(let i = 0; i < functionsCopy.length; i++){
      if (Object.keys(functionsCopy[i]).includes(obj.name)){
        fnObjIndex = i;
      } 
    }
    if (obj.timerType === "interval"){
      clearInterval(functionsCopy[fnObjIndex][`${obj.name}`]);
    } else {
      clearTimeout(functionsCopy[fnObjIndex][`${obj.name}`]);
    }
    functionsCopy.splice(fnObjIndex, 1);
    this.setState({
      functions: functionsCopy
    }, () => this.findObj(obj.name, 'No'));
    alert("Successfully deActivated break!");
  }

  findObj = (objName, changeStr) => {
    const stateBreaksCopy = [...this.state.breaks];
    const newBreaks = stateBreaksCopy.map(b => b.name !== objName ? b : {...b, active: changeStr});
    this.setState({
      breaks: newBreaks
    });
  }


  render() {
    return (
      <div className="conainer">
        <Header />
    
        <NewBreak addNewBreak={this.addNewBreak} breakNames={this.state.breakNames} />
        <hr />
        <YourBreaks breaks={this.state.breaks} activateBreak={this.activateBreak} deActivateBreak={this.deActivateBreak} />

        <Footer />
      </div>
    );
  }
}

export default App;
