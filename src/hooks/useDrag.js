// src/hooks/useDrag.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrag = () => {
    const { setDraggedItem, setSource } = useContext(DragContext);

    const handleDragStart = (e, item, source) => {
        setDraggedItem(item);
        setSource(source);
        // Autres actions lors du début du drag
    };

    return { handleDragStart };
};

export default useDrag;
