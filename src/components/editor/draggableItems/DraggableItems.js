// src/components/DraggableItem.js
import React from 'react';
import useDrag from '../../../hooks/useDrag';

import Button from '../../common/Button/Button'
import Slider from '../../common/Slider/Slider'
import ProgressBar from '../../common/ProgressBar/ProgressBar'

import './DraggalbeItems.css'

const componentMap = {
    Button,
    Slider,
    ProgressBar
};

const DraggableItems = ({ items }) => {
    const { handleDragStart } = useDrag();

    return (
        <div className='draggableItems'>
            {items.map((item, index) => {
                const Component = componentMap[item.type];
                return (
                    <div key={index} draggable onDragStart={(e) => handleDragStart(e, item)}>
                        <Component {...item.props}/>
                    </div>
                );
            })}
        </div>
    );
};


export default DraggableItems;
