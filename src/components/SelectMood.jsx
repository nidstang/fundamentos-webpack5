import React from 'react';

export default ({ onSelect, selected }) => {

    const onChange = ev => onSelect(ev.target.value);

    return <div className='cc-selector'>
        <input id={`happy`} onChange={onChange} type="radio" name="mood" value="happy" checked={selected['happy']}/>
        <label className="emoji drinkcard-cc happy" htmlFor={`happy`}></label>
        <input id={`sad`} onChange={onChange} type="radio" name="mood" value="sad" checked={selected['sad']} />
        <label className="emoji drinkcard-cc sad" htmlFor={`sad`}></label>
        <input id={`none`} onChange={onChange} type="radio" name="mood" value="none" checked={selected['none']} />
        <label className="emoji drinkcard-cc none" htmlFor={`none`}></label>
        <input id={`angry`} onChange={onChange} type="radio" name="mood" value="angry" checked={selected['angry']} />
        <label className="emoji drinkcard-cc angry" htmlFor={`angry`}></label>
    </div>
};