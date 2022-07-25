import React from 'react';

export default ({ left, right, onChange, biside = false, disabled = false }) => {
    const onRepsChange = ev => {
        onChange({
            type: ev.target.name,
            value: ev.target.value,
        });
    };


    return <div className={`${biside && 'form-inline'} control`}>
        <input
            placeholder={biside ? 'Left' : 'Reps'}
            disabled={disabled}
            name='left'
            onChange={onRepsChange}
            type='number'
            value={left} />
        
        { biside && <input onChange={onRepsChange} placeholder={'Right'} disabled={disabled} type='number' name='right' value={right} />}
    </div>
};