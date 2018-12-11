import React, { Component } from 'react';

class BreakList extends Component {

    buttonType = (breakObj) => {
        if(breakObj.active === 'Yes'){
            return <button className="btn btn-danger btn-sm" onClick={() => this.props.deActivateBreak(breakObj)}>
                Cancel
              </button>;
        }
        return <button className="btn btn-success btn-sm" onClick={() => this.props.activateBreak(breakObj)}>
            Start
          </button>;
    }

    mapBreaks = (arr) => {
        return arr.map( (b, i) => (<tr key={i}>
            <td style={{ width: "10%" }}>  
                {b.active}
            </td>
            <td style={{ width: "20%" }}>
                {b.name}
            </td>
            <td style={{ width: "30%" }}>
                {b.url}
            </td>
            <td style={{ width: "20%" }}>
                {b.timer} {b.minOrSec}, {b.timerType}
            </td>
            <td style={{ width: "10%" }}>
                {this.buttonType(b)}
            </td>

        </tr>));
    }

    renderBreakList = (arr) => {
        if(arr.length === 0){
            return (
                <tr>
                    <td colSpan="5" style={{ width: 1400,  }}>
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
                            <th style={{width: "10%"}}>
                                Active?
                            </th>
                            <th style={{ width: "20%" }}>
                                Break Name
                            </th>
                            <th style={{ width: "30%" }}>
                                Pop-Up URL
                            </th>
                            <th style={{ width: "20%" }}>
                                Timer Info
                            </th>
                            <th style={{ width: "10%" }}>
                                Start/Cancel
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                            {this.renderBreakList(this.props.breaks)}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default BreakList;
