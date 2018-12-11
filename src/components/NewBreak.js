import React from 'react';
import BreakForm from '../containers/BreakForm';

const NewBreak = () => {
    return (
        <div className="container new-break">
            <h3>Create a new break timer:</h3>
            <br />
            <BreakForm />
        </div>
    );
}

export default NewBreak;
