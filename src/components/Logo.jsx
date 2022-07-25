import React from 'react';
import LogoImage from '../assets/logo.png'; // importar. no usar en un img directamente
import Hello from '../assets/test.txt';

console.log(Hello);

export default () => (
    <section className='logo'>
        <img src={LogoImage} />
    </section>
);