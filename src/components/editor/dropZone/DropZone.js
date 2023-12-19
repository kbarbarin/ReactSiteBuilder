// src/components/DropZone.js
import React, { useContext } from 'react';

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';
import useDrag from '../../../hooks/useDrag';

import Button from '../../common/Button/Button'
import Slider from '../../common/Slider/Slider'
import ProgressBar from '../../common/ProgressBar/ProgressBar'

import './DropZone.css'

const componentMap = {
    Button,
    Slider,
    ProgressBar
};

const DropZone = () => {
    const { handleDrop, handleDragOver } = useDrop();
    const { handleDragStart } = useDrag();
    const { itemList } = useContext(DragContext);

    return (
        <div className='dropZone' onDrop={handleDrop} onDragOver={(e) => handleDragOver(e)}>
            {itemList.length > 0 && (
                itemList.map((item, index) => {
                    const Component = componentMap[item.type];
                    return (
                        <div key={index} draggable onDragStart={(e) => handleDragStart(e, item, 'dropzone', index)}>
                            <Component {...item.props} />
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default DropZone;
