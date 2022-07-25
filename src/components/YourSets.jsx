import React from 'react';
import Exercise from './Exercise';

export default ({ sets }) => (
    <section className='your-sets'>
        { sets.map((props, i) => <Exercise key={`exercice-${i}`} {...props} />)}
    </section>
);