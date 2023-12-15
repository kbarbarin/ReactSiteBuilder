// src/components/DraggableItem.js
import React from 'react';
import Item from '../item/Item';
import './DraggalbeItems.css'

const DraggableItems = ({ items }) => {
    return (
        <div className='draggableItems'>
            {items.map((item) => (
                <Item key={item} item={item} />
            ))}
        </div>
    );
};


export default DraggableItems;
