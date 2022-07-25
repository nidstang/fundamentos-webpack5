import React from 'react';
import AddSerie from './AddSerie';

export default ({ info, onAddSerie, biside = false, disabled = false }) => {

    const onChange = key => (data) => onAddSerie([key, data]);

    return (
        <>
            { Object.keys(info).map((key, i) => {
                return (
                    <AddSerie 
                        disabled={disabled}
                        biside={biside}
                        key={i}
                        right={info[key].right}
                        left={info[key].left}
                        onChange={onChange(i)} />
                );
            }) }

        </>
    )
};