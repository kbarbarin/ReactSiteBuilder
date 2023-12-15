// src/hooks/useDrag.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrag = () => {
    const { setDraggedItem } = useContext(DragContext);

    const handleDragStart = (item) => {
        setDraggedItem(item);
        // Autres actions lors du début du drag
    };

    return { handleDragStart };
};

export default useDrag;
