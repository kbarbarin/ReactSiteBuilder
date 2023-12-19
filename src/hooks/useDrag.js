// src/hooks/useDrag.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrag = () => {
    const { setDraggedItem, setSourceItem, setIndexItem } = useContext(DragContext);

    const handleDragStart = (e, item, source, index) => {
        setDraggedItem(item);
        setSourceItem(source);
        setIndexItem(index);
        // Autres actions lors du début du drag
    };

    return { handleDragStart };
};

export default useDrag;
