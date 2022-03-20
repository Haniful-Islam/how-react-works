import React from 'react';
import Phonedetail from '../phonedetail/Phonedetail';

const Device = (props) => {
    return (
        <div>
            <h2>I have:{props.name}</h2>
            <Phonedetail price={props.price}></Phonedetail>
        </div>
    );
};

export default Device;