import React from 'react';

export default ({ onSelect, selected }) => {

    const onChange = ev => onSelect(ev.target.value);

    return <div className='cc-selector' onChange={onChange}>
        <input id={`happy`} type="radio" name="mood" value="happy" checked={selected['happy']}/>
        <label class="emoji drinkcard-cc happy" for={`happy`}></label>
        <input id={`sad`} type="radio" name="mood" value="sad" checked={selected['sad']} />
        <label class="emoji drinkcard-cc sad"for={`sad`}></label>
        <input id={`none`} type="radio" name="mood" value="none" checked={selected['none']} />
        <label class="emoji drinkcard-cc none" for={`none`}></label>
        <input id={`angry`} type="radio" name="mood" value="angry" checked={selected['angry']} />
        <label class="emoji drinkcard-cc angry"for={`angry`}></label>
    </div>
};