import React, { Component } from 'react';

class BreakForm extends Component {
    state = {
        name: '',
        url: '',
        timer: 0,
        minOrSec: 'min',
        timerMilli: 0,
        timerType: 'interval'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.changeToMilliSec();
    }

    createBreak = () => {
        console.log(this.state);
        let stateCopy = {...this.state};
        stateCopy.active = 'Yes';
        this.props.addNewBreak(stateCopy);
        this.resetState();
    }

    changeToMilliSec = () => {
        let timeInMilli;
        if(this.state.minOrSec === 'min'){
            timeInMilli = 1000 * 60 * this.state.timer;
        } else {
            timeInMilli = 1000 * this.state.timer;
        }
        this.setState({
            timerMilli: timeInMilli
        }, () => this.createBreak());
    }

    resetState = () => {
        this.setState({
            name: '',
            url: '',
            timer: 0,
            minOrSec: 'min',
            timerMilli: 0,
            timerType: 'interval'
        });
    }

    render() {
        return (
            <div className="container break-form">
                <form className="form-group" onSubmit={this.onSubmit}>

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Break Name</th>
                                <th>URL<br />(YouTube, Giphy, Meme, Img)</th>
                                <th>Timer</th>
                                <th>Interval<br />or Once</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" placeholder="max length 20 chars" maxLength="20" required name="name" value={this.state.name} onChange={(e) => this.onChange(e)} />
                                </td>
                                <td>
                                    <input type="text" placeholder="enter url" required name="url" value={this.state.url} onChange={(e) => this.onChange(e)} />
                                </td>
                                <td>
                                    <input placeholder="time" type="number" min="1" required name="timer" value={this.state.timer} onChange={(e) => this.onChange(e)} /> &nbsp;

                                    <select name="minOrSec" value={this.state.minOrSec} onChange={(e) => this.onChange(e)}>
                                        <option value="min">min</option>
                                        <option value="sec">sec</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control" required name="timerType" value={this.state.timerType} onChange={(e) => this.onChange(e)}>
                                        <option value="interval">
                                            Interval
                                        </option>
                                        <option value="once">
                                            Once
                                        </option>

                                    </select>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <button className="submit-break">Activate</button>  
                </form>
                
            </div>
        );
    }
}

export default BreakForm;
