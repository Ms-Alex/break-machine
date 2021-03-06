import React from 'react';
import BreakForm from '../containers/BreakForm';

const NewBreak = ({ addNewBreak, breakNames }) => {
    return (
        <div className="container new-break">
            <h4>Create a new break timer:</h4>
            <br />
            <BreakForm addNewBreak={addNewBreak} breakNames={breakNames} />
        </div>
    );
}

export default NewBreak;
