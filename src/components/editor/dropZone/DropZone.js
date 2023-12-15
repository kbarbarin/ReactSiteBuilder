// src/components/DropZone.js
import React, { useContext } from 'react';

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';

import './DropZone.css'

const DropZone = () => {
    const { handleDrop, handleDragOver } = useDrop();
    const { itemList } = useContext(DragContext);
    console.log(itemList);

    return (
        <div className='dropZone' onDrop={handleDrop} onDragOver={handleDragOver}>
            {itemList.length > 0 && (
                itemList.map((item, index) => (
                    <div key={index}>{item}</div> // Assurez-vous que chaque élément a une propriété 'content'
                ))
            )}
        </div>
    );
};

export default DropZone;
