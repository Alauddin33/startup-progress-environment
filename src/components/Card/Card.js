import React from 'react';
import './Card.css'
const Card = ({ handleAddToList, card }) => {
    const { company, time, picture, about } = card;
    // console.log(props);


    return (
        <div className='card'>
            <img src={picture} alt="" />
            <div className="card-info">
                <p className='company-name' >{company}</p>
                <p>{about.slice(0, 80)}...</p>
                <p className='time'>Duration: {time} minutes</p>
            </div>

            <button onClick={() => handleAddToList(card)} className='btn-card'>Add To List</button>
        </div>
    );
};

export default Card;