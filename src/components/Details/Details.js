import React, { useEffect, useState } from 'react';
import './Details.css'
import logo from '../../logo.png'
import Card from '../Card/Card';
import List from './List/List';


const Details = () => {
    const [cards, setCards] = useState([]);

    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.log(error));
    }, [])

    const handleAddToList = (card) => {
        const newList = [...list, card];
        setList(newList);
    }

    return (
        <div className='description-container' >

            <div className='details-container'>
                <header className='header' >
                    <img src={logo} alt="" />
                    <h1>Startup Progress Environment</h1>
                </header>
                <div className='cards-container'>
                    {
                        cards.map(card => <Card
                            key={card.id}
                            card={card}
                            handleAddToList={handleAddToList}
                        ></Card>)
                    }
                </div>
            </div>

            <div className='list-container'>
                <List list={list}></List>
            </div>

        </div>
    );
};

export default Details;