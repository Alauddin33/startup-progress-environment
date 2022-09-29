import React, { useEffect, useState } from 'react';
import './Details.css'
import logo from '../../logo.png'
import Card from '../Card/Card';


const Details = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.log(error));
    }, [])
    return (
        <div>
            <header className='header'>
                <img src={logo} alt="" />
                <h1>Startup Progress Environment</h1>
            </header>

            <div className='cards-container'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }

            </div>
        </div>
    );
};

export default Details;