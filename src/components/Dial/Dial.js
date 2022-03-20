import React from 'react';

const Dial = (props) => {
    return (
        <div style={{ border: "4px solid pink", margin: '15px' }}>
            <h1>This is Dial</h1>
            <p>Steps a far: {props.steps}</p>
        </div>
    );
};

export default Dial;