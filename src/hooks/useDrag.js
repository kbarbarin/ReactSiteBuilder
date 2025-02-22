// src/hooks/useDrag.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrag = () => {
    const { setDraggedItem, setSourceItem, setIndexItem, setStartDragPosition } = useContext(DragContext);

    const handleDragStart = (e, item, source, index) => {
        const dropZoneRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - dropZoneRect.left;
        const y = e.clientY - dropZoneRect.top;
        setStartDragPosition({ x, y });
        setDraggedItem(item);
        setSourceItem(source);
        setIndexItem(index);
        // Autres actions lors du début du drag
    };

    return { handleDragStart };
};

export default useDrag;
