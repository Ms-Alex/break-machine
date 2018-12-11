import React, { Component } from 'react';

class BreakForm extends Component {
    state = {
        name: '',
        url: '',
        timer: 0,
        minOrSec: '',
        timerMilli: 0,
        timerType: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.changeToMilliSec();
        // console.log(this.state);
        this.setState({
            name: '',
            url: '',
            timer: 0,
            minOrSec: '',
            timerMilli: 0,
            timerType: ''
        });
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
        }, () => console.log(this.state));
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
                                    <input type="text" placeholder="max length 16 chars" maxLength="16" required name="name" value={this.state.name} onChange={(e) => this.onChange(e)} />
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
                                        <option className="once">
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
