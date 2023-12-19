// src/hooks/useDrop.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrop = () => {
    const { draggedItem, setDraggedItem, itemList, setItemList, sourceItem, indexItem, setIndexItem } = useContext(DragContext);

    const handleDragOver = e => {
        e.preventDefault();
    };

    const handleDrop = (e, dropZone) => {
        e.preventDefault();
        if (sourceItem === 'dropzone' && dropZone === 'deletezone') {
            setItemList(itemList.filter((_, i) => i !== indexItem));
            setDraggedItem(null); // Réinitialisez l'élément déplacé
            setIndexItem(null);
        } else if (sourceItem === 'draggableZone' && dropZone === 'dropzone') {
            // Ajoutez l'élément déplacé à itemList ou traitez-le comme nécessaire
            setItemList([...itemList, draggedItem]);
            setIndexItem(null);
            setDraggedItem(null); // Réinitialisez l'élément déplacé
        } else {
            setIndexItem(null);
            setDraggedItem(null); // Réinitialisez l'élément déplacé
        }
    };

    return { handleDragOver, handleDrop };
};

export default useDrop;
