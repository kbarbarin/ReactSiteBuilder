// src/hooks/useDrop.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrop = () => {
    const { draggedItem, setDraggedItem, itemList, setItemList, sourceItem, indexItem, setIndexItem } = useContext(DragContext);

    const handleDragOver = e => {
        e.preventDefault();
    };

    const getCoordonate = (e) => {
        const dropZoneRect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - dropZoneRect.left; // Coordonnée X relative à la DropZone
            const y = e.clientY - dropZoneRect.top;  // Coordonnée Y relative à la DropZone
            const cellWidth = dropZoneRect.width / 30;
            const cellHeight = dropZoneRect.height / 30;
            const gridColumn = Math.ceil(x / cellWidth);
            const gridRow = Math.ceil(y / cellHeight);
            return {gridColumn, gridRow}
    }

    const handleDrop = (e, dropZone) => {
        e.preventDefault();
        if (sourceItem === 'dropzone' && dropZone === 'deletezone') {
            setItemList(itemList.filter((_, i) => i !== indexItem));
            setDraggedItem(null);
            setIndexItem(null);
        } else if (sourceItem === 'draggableZone' && dropZone === 'dropzone') {
            const {gridColumn, gridRow} = getCoordonate(e);
            const newItem = { ...draggedItem, gridColumn, gridRow };
            setItemList([...itemList, newItem]);
            setIndexItem(null);
            setDraggedItem(null);
        } else if (sourceItem === 'dropzone' && dropZone === 'dropzone') {
            const {gridColumn, gridRow} = getCoordonate(e);

            const updatedItemList = itemList.map((item, idx) => {
                if (idx === indexItem) {
                    return { ...item, gridRow: gridRow, gridColumn: gridColumn };
                }
                return item;
            });
        
            setItemList(updatedItemList);

            setIndexItem(null);
            setDraggedItem(null);
        } else {
            setIndexItem(null);
            setDraggedItem(null);
        }
    };

    return { handleDragOver, handleDrop };
};

export default useDrop;
