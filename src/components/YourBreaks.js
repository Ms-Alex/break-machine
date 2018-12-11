import React from 'react';
import BreakList from '../containers/BreakList';

const YourBreaks = ({ breaks, activateBreak, deActivateBreak }) => {
    return (
        <div className="container your-breaks">
            <h4>Your Breaks:</h4>
            <br />
            <BreakList breaks={breaks} activateBreak={activateBreak} deActivateBreak={deActivateBreak} />
        </div>
    );
}

export default YourBreaks;
