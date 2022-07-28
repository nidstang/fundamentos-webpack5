import React, { useState } from 'react';
import Logo from './components/Logo.jsx';
import Register from './components/Register.jsx';
import YourSets from './components/YourSets.jsx';
import './assets/styles.scss';
import './assets/main.css';

export default () => {

    const [sets, updateSets] = useState([]);

    const onNew = set => {
        updateSets([...sets, set]);
        console.log([...sets, set]);
    };


    return (
        <div className='container'>
            <Logo />
            <Register onNew={onNew} />
            <YourSets sets={sets} /> 
        </div>
    );
}