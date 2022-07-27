import React, { useState, Suspense } from 'react';
import Logo from './components/Logo.jsx';
import Register from './components/Register.jsx';
// import YourSets from './components/YourSets.jsx';
// import './assets/styles.scss';
import './assets/main.css';

const YourSets = React.lazy(() => import('./components/YourSets.jsx'));

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
            <Suspense fallback={<h2>Loading...</h2>}>
                { sets.length > 0 && <YourSets sets={sets} /> }
            </Suspense>
        </div>
    );
}