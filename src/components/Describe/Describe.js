import React from 'react';
import Calculation from '../Calculation/Calculation';
import Details from '../Details/Details';
import './Describe.css'
const Describe = () => {
    return (
        <div className='description-container'>
            <div className="details-container">
                <Details></Details>
            </div>
            <div className="calculation-container">
                <Calculation></Calculation>
            </div>

        </div>
    );
};

export default Describe;