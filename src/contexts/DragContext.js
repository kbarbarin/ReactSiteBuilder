// src/contexts/DragContext.js
import React, { createContext, useState } from 'react';

export const DragContext = createContext();

export const DragProvider = ({ children }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [sourceItem, setSourceItem] = useState(null);
    const [indexItem, setIndexItem] = useState(null);
    const [itemList, setItemList] = useState([]);
    const [startDragPosition, setStartDragPosition] = useState({x: 0, y: 0});

    return (
        <DragContext.Provider
            value={{
                draggedItem, setDraggedItem,
                itemList, setItemList,
                sourceItem, setSourceItem,
                indexItem, setIndexItem,
                startDragPosition, setStartDragPosition
            }}>
            {children}
        </DragContext.Provider>
    );
};
