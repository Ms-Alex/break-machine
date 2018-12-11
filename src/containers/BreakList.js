import React, { Component } from 'react';

class BreakList extends Component {

    buttonType = (breakObj) => {
        if(breakObj.active === 'Yes'){
            return <button onClick={() => this.props.deActivateBreak(breakObj)}>Cancel</button>
        }
        return <button onClick={() => this.props.activateBreak(breakObj)}>Start</button>
    }

    mapBreaks = (arr) => {
        return arr.map( (b, i) => (<tr key={i}>
            <td>
                {b.active}
            </td>
            <td>
                {b.name}
            </td>
            <td>
                {b.url}
            </td>
            <td>
                {b.timer} {b.minOrSec}, {b.timerType}
            </td>
            <td>
                {this.buttonType(b)}
            </td>

        </tr>));
    }

    renderBreakList = (arr) => {
        if(arr.length === 0){
            return (
                <tr>
                    <td colSpan="5" style={{textAlign: 'center', width: 1400, height: 200}}>
                        <h5>None yet...</h5>
                    </td>
                </tr>
            )
        }
        return this.mapBreaks(arr)
    }

    render() {
        return (
            <div className="container break-list">

                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>
                                Active?
                            </th>
                            <th>
                                Break Name
                            </th>
                            <th>
                                Pop-Up URL
                            </th>
                            <th>
                                Timer Info
                            </th>
                            <th>
                                Start/Cancel
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                            {this.renderBreakList(this.props.breaks)}
                            {/* {this.mapBreaks(this.props.breaks)} */}

                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default BreakList;
