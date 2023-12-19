// src/components/DraggableItem.js
import React from 'react';
import DeleteZone from '../deleteZone/DeleteZone';
import useDrag from '../../../hooks/useDrag';

import Button from '../../common/Button/Button'
import Slider from '../../common/Slider/Slider'
import ProgressBar from '../../common/ProgressBar/ProgressBar'

import './DraggableZone.css'

const componentMap = {
    Button,
    Slider,
    ProgressBar
};

const DraggableZone = ({ items }) => {
    const { handleDragStart } = useDrag();

    return (
        <div className='draggableZone'>
            {items.map((item, index) => {
                const Component = componentMap[item.type];
                return (
                    <div key={index} draggable onDragStart={(e) => handleDragStart(e, item, 'draggableZone', index)}>
                        <Component {...item.props} />
                    </div>
                );
            })}

        </div>
    );
};


export default DraggableZone;
