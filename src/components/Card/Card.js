import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const { name, time, picture, about } = props.card;

    return (
        <div className='card'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Card;