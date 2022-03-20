import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{ border: "4px solid lime", margin: '15px' }}>
            <h1>show display:{props.name}</h1>
            <p>Steps a far:{props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;