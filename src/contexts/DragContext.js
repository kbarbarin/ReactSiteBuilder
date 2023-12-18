// src/contexts/DragContext.js
import React, { createContext, useState } from 'react';

export const DragContext = createContext();

export const DragProvider = ({ children }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [source, setSource] = useState(null);
    const [itemList, setItemList] = useState([]);

    return (
        <DragContext.Provider value={{ draggedItem, setDraggedItem, itemList, setItemList, source, setSource }}>
            {children}
        </DragContext.Provider>
    );
};
