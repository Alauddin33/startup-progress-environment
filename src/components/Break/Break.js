import React from 'react';
import './break.css'
const Break = (props) => {

    return (
        <div>
            <button onClick={() => props.handleAddToBreakTime(props.time)} className='btn'>{props.time.break}</button>
        </div>
    );
};

export default Break;