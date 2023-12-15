// src/components/DropZone.js
import React, { useContext } from 'react';

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';

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
    const { itemList } = useContext(DragContext);
    console.log(itemList);

    return (
        <div className='dropZone' onDrop={handleDrop} onDragOver={handleDragOver}>
            {itemList.length > 0 && (
                itemList.map((item, index) => {
                    const Component = componentMap[item.type];
                    return (
                        <div key={index}>
                            <Component {...item.props} />
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default DropZone;
