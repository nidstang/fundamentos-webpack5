import React, { useState } from 'react';
import Series from './Series';
import SelectMood from './SelectMood';
// import SaveButton from 'ts-loader?!./SaveButton';
import SaveButton from './SaveButton';

const Side = (right, left) => ({ right, left });

Side.empty = () => Side('', '');

const defaultInfo = {
    0: {
        right: '',
        left: '',
    }
};

export default ({ onNew }) => {
    const [name, setName] = useState('');
    const [biside, setBiside] = useState(false);
    const [mood, setMood] = useState({
        happy: true,
    })
    const [count, setCount] = useState(0);
    const [setsInfo, updateSetsInfo] = useState(defaultInfo);


    const onAddSet = ev => {
        ev.preventDefault();
        updateSetsInfo({...setsInfo, [count + 1]: Side.empty() });
        setCount(c => c + 1);
        // throw new Error('Broken');
    };

    const onNewSet = ev => {
        ev.preventDefault();
        onNew({
            name,
            series: setsInfo, 
            mood: Object.keys(mood)[0],
            biside,
        });

        setName('');
        setCount(0);
        updateSetsInfo(defaultInfo);
    };

    const onSelectMood = mood => {
        setMood({ [mood]: true });
    };

    const onAddSerie = ([key, data]) => {
        updateSetsInfo({
            ...setsInfo,
            [key]: {
                ...setsInfo[key],
                [data.type]: data.value,
            }
        })
    };

    const onChangeBiside = ev => {
        ev.preventDefault();
        setBiside(b => !b);
    };

    return <section className='create-new-set'>
        <h2>Registrar nuevo set</h2>
        <form className="control">
            <input
                placeholder='Exercise name'
                type='text'
                value={name}
                onChange={ev => setName(ev.target.value)}/>
            
            <button onClick={onChangeBiside}>
                { biside ? 'Regular' : 'Two-sided'}
            </button>
            
            <Series
                biside={biside}
                onAddSerie={onAddSerie}
                info={setsInfo} />

            <button onClick={onAddSet}>Add set</button>

            <SelectMood id='Register' selected={mood} onSelect={onSelectMood} />
            <SaveButton onSave={onNewSet} />
        </form>
    </section>
};
                //return <AddSerie key={i} value={setsInfo[key].value} onChange={value => updateSetsInfo({ ...setsInfo, [key]: { value, side: setsInfo[key].side }})} />