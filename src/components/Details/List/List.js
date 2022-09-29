import React from 'react';
import { useState } from 'react';
import Break from '../../Break/Break';
import Info from '../../Info/Info';
import './List.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const List = ({ list }) => {
    let total = 0;

    for (const card of list) {
        total = total + card.time;
    }

    const breakTimes = [
        { id: 1, break: 20 },
        { id: 2, break: 30 },
        { id: 3, break: 40 },
        { id: 4, break: 50 },
        { id: 5, break: 60 }
    ]
    const [time, setTime] = useState([])

    const handleAddToBreakTime = (time) => {
        setTime(time)
    }
    const notify = () => toast.success("Wow you complete yoourr task!", {
        theme: 'colored'
    });

    return (

        <div className='list'>
            <Info></Info>
            <p><strong>Add a break</strong></p>
            <div className='btn-container'>
                {
                    breakTimes.map(time => <Break
                        key={time.id}
                        time={time}
                        handleAddToBreakTime={handleAddToBreakTime}
                    ></Break>)
                }
            </div>
            <h3>Time Calculation</h3>
            <p>Working time: {total}</p>
            <p>break Time: {time.break}</p>
            <button onClick={notify} className='btn-activity'>Activity Completed</button>
            <ToastContainer
                position="top-center"

            />
        </div>
    );
};

export default List;