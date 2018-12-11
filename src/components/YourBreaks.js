import React from 'react';
import BreakList from '../containers/BreakList';

const YourBreaks = ({ breaks }) => {
    return (
        <div className="container your-breaks">
            <h4>Your Breaks:</h4>
            <br />
            <BreakList breaks={breaks} />
        </div>
    );
}

export default YourBreaks;
