// src/components/DeleteZone.js
import React, { useContext, useEffect } from 'react';
import { DragContext } from '../../../contexts/DragContext';
import './DeleteZone.css'
import useDrop from '../../../hooks/useDrop';

const DeleteZone = () => {
    const { draggedItem } = useContext(DragContext);
    const { handleDragOver, handleDrop } = useDrop();

    useEffect(() => {
        console.log(draggedItem);
    })

    return (
        <div onDrop={(e) => handleDrop(e, 'deletezone')} onDragOver={handleDragOver} className="deleteZone">
            Drag here to delete
        </div>
    );
};

export default DeleteZone;
