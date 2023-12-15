// src/components/DraggableItem.js
import React from 'react';
import useDrag from '../../../hooks/useDrag';

import './Item.css'

const DraggableItem = ({ item }) => {
    const { handleDragStart } = useDrag();

    return (
        <div className="item" key={item} draggable onDragStart={() => handleDragStart(item)}>
            <p>{item}</p>
        </div>
    );
};

export default DraggableItem;
