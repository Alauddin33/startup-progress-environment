import React, { useState } from 'react';
import './Details.css'
import logo from '../../logo.png'


const Details = () => {
    const [] = useState([])

    return (
        <div>
            <header className='header'>
                <img src={logo} alt="" />
                <h1>Startup Progress Environment</h1>
            </header>

            <div className="card">
                <h1>This is card</h1>
            </div>
        </div>
    );
};

export default Details;