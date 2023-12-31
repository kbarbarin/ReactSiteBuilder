// src/components/DropZone.js
import React, { useContext, useEffect } from 'react';

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';
import useDrag from '../../../hooks/useDrag';
import useMouseEvents from '../../../hooks/useMouseEvents';

import Resizable from '../Resizable/Resizable';

import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';
import InputField from '../../common/InputField/InputField';
import Modal from '../../common/Modal/Modal';
import Slider from '../../common/Slider/Slider';
import ProgressBar from '../../common/ProgressBar/ProgressBar';

import './DropZone.css'

const componentMap = {
    Button,
    Card,
    InputField,
    Modal,
    Slider,
    ProgressBar
};

const DropZone = () => {
    const { handleDrop, handleDragOver } = useDrop();
    const { handleDragStart } = useDrag();
    const { handleMouseDown, handleMouseMove, handleMouseUp } = useMouseEvents();
    const { itemList } = useContext(DragContext);

    return (
        <div className='dropZone' onDrop={(e) => handleDrop(e, 'dropzone')} onDragOver={(e) => handleDragOver(e)}>
            {itemList.length > 0 && (
                itemList.map((item, index) => {
                    const Component = componentMap[item.type];
                    const style = {
                        gridColumnStart: item.gridColumn,
                        gridRowStart: item.gridRow,
                        // Ajoutez d'autres styles si nécessaire
                    };
                    return (
                        // <Resizable key={index} style={style}>
                            <div key={index} style={style} className='dropZone-element' draggable onDragStart={(e) => handleDragStart(e, item, 'dropzone', index)}>
                                <Component {...item.props} />
                            </div>
                        // </Resizable>
                    );
                })
            )}
        </div>
    );
};

export default DropZone;
