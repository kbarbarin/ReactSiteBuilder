// src/components/DeleteZone.js
import React from 'react';
import useDrop from '../../../hooks/useDrop';

import './DeleteZone.css'

const DeleteZone = () => {
    const { handleDragOver, handleDrop } = useDrop();

    return (
        <div onDrop={(e) => handleDrop(e, 'deletezone')} onDragOver={handleDragOver} className="deleteZone">
            Drag here to delete
        </div>
    );
};

export default DeleteZone;
