import React from 'react';
import Series from './Series';
import Mood from './Mood';

export default ({ name, series, mood, biside }) => {

    return (
        <div className="exercise">
            <span className="name"><strong>{name}</strong></span>
            <Series
                biside={biside}
                info={series}
                disabled />
        

            <Mood mood={mood} />

            <hr />
        </div>
    );
};