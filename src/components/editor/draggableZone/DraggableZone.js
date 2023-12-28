// src/components/DraggableItem.js
import React from 'react';
import useDrag from '../../../hooks/useDrag';

import Button from '../../common/Button/Button'
import Slider from '../../common/Slider/Slider'
import ProgressBar from '../../common/ProgressBar/ProgressBar'

import './DraggableZone.css'
import main from '../../../generator';

const componentMap = {
    Button,
    Slider,
    ProgressBar
};

const DraggableZone = ({ items }) => {
    const { handleDragStart } = useDrag();

    return (
        <div className='draggableZone'>
            <div>
                {items.map((item, index) => {
                    const Component = componentMap[item.type];
                    return (
                        <div className='draggableZone-element' key={index} draggable onDragStart={(e) => handleDragStart(e, item, 'draggableZone', index)}>
                            <Component {...item.props} />
                        </div>
                    );
                })}
            </div>
            <Button className='draggableZone-export' onClick={main}>Exporter</Button>
        </div>
    );
};


export default DraggableZone;
