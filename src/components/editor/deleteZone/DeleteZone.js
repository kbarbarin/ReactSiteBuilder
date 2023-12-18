// src/components/DeleteZone.js
import React, { useContext } from 'react';
import { DragContext } from '../../../contexts/DragContext';
import './DeleteZone.css'

const DeleteZone = () => {
    const { draggedItem, setItemList } = useContext(DragContext);

    const handleDrop = (e) => {
        e.preventDefault();
        setItemList(currentItems => currentItems.filter(item => item !== draggedItem));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div onDrop={handleDrop} onDragOver={handleDragOver} className="deleteZone">
            Drag here to delete
        </div>
    );
};

export default DeleteZone;
