import React from 'react';

export default ({ key, left, right, onChange, biside = false, disabled = false }) => {
    const onFormChange = ev => {
        onChange({
            type: ev.target.name,
            value: ev.target.value,
        });
    };


    return <form className={biside && 'form-inline'} onChange={onFormChange}>
        <input
            placeholder={biside ? 'Left' : 'Reps'}
            disabled={disabled}
            key={key}
            name='left'
            type='number'
            value={left} />
        
        { biside && <input placeholder={'Right'} disabled={disabled} type='number' name='right' key={`right-${key}`} value={right} />}
    </form>
};