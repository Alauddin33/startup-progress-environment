import React from 'react';
import './List.css'
const List = ({ list }) => {
    return (
        <div>
            <h1>This is List container</h1>
            <p>Working Hours: {list.length}</p>
        </div>
    );
};

export default List;