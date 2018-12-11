import React from 'react';
import BreakForm from '../containers/BreakForm';

const NewBreak = () => {
    return (
        <div className="container new-break">
            <h2>Create a new break timer:</h2>
            <BreakForm />
        </div>
    );
}

export default NewBreak;
