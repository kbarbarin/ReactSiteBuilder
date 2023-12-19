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

            const dropZoneRect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - dropZoneRect.left; // Coordonnée X relative à la DropZone
            const y = e.clientY - dropZoneRect.top;  // Coordonnée Y relative à la DropZone
            const cellWidth = dropZoneRect.width / 12;
            const cellHeight = dropZoneRect.height / 12;
            const gridColumn = Math.ceil(x / cellWidth);
            const gridRow = Math.ceil(y / cellHeight);

            console.log('Column = ' + gridColumn);
            console.log('Row = ' + gridRow);

            const newItem = { ...draggedItem, gridColumn, gridRow };

            setItemList([...itemList, newItem]);
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
