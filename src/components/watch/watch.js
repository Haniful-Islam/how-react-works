import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseStep = () => {
        const newSteps = steps + 1;
        setSteps(newSteps);
        // console.log(steps)
    }
    useEffect(() => {
        console.log(steps)
    }, [steps])
    return (
        <div style={{ border: "5px solid green", margin: '15px' }}>
            <h2>This is my smart Watch</h2>
            <h3>This is step:{steps}</h3>
            <button onClick={increaseStep}>increaseStep</button>
            <Display name='watch' steps={steps}></Display>

        </div>
    );
};

export default Watch;