// src/hooks/useDrop.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrop = () => {
    const { draggedItem, setDraggedItem, itemList, setItemList, source } = useContext(DragContext);

    const handleDragOver = e => {
        e.preventDefault();
    };

    const handleDrop = (e, dropZone, index) => {
        e.preventDefault();
        console.log(draggedItem);
        if (source === 'dropzone' && dropZone !== 'dropzone') {
            setItemList(itemList.filter((_, i) => i !== index));
            setDraggedItem(null); // Réinitialisez l'élément déplacé
            return;
        }
        // Ajoutez l'élément déplacé à itemList ou traitez-le comme nécessaire
        setItemList([...itemList, draggedItem]);
        setDraggedItem(null); // Réinitialisez l'élément déplacé
    };

    return { handleDragOver, handleDrop };
};

export default useDrop;
