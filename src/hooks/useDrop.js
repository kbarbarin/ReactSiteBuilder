// src/hooks/useDrop.js
import { useContext } from 'react';
import { DragContext } from '../contexts/DragContext';

const useDrop = () => {
    const { draggedItem, setDraggedItem, itemList, setItemList, sourceItem, indexItem, setIndexItem, startDragPosition, setStartDragPosition } = useContext(DragContext);

    const handleDragOver = e => {
        e.preventDefault();
    };

    const getCoordonate = (e) => {
        const dropZoneRect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - dropZoneRect.left; // Coordonnée X relative à la DropZone
        const y = e.clientY - dropZoneRect.top;  // Coordonnée Y relative à la DropZone
        return { x, y }
    }

    const handleDrop = (e, dropZone) => {
        e.preventDefault();
        if (sourceItem === 'dropzone' && dropZone === 'deletezone') {
            console.log('Deleting item');
            setItemList(itemList.filter((_, i) => i !== indexItem));
            setDraggedItem(null);
            setIndexItem(null);
        } else if (sourceItem === 'draggableZone' && dropZone === 'dropzone') {
            const { x, y } = getCoordonate(e);
            console.log('Creating item');
            const newItem = { ...draggedItem, left: x - startDragPosition.x, top: y - startDragPosition.y };
            setItemList([...itemList, newItem]);
            setStartDragPosition({ x: 0, y: 0 });
            setIndexItem(null);
            setDraggedItem(null);
        } else if (sourceItem === 'dropzone' && dropZone === 'dropzone') {
            const { x, y } = getCoordonate(e);
            console.log('Mooving item');

            const updatedItemList = itemList.map((item, idx) => {
                if (idx === indexItem) {
                    return { ...item, left: x - startDragPosition.x, top: y - startDragPosition.y };
                }
                return item;
            });

            setItemList(updatedItemList);
            setStartDragPosition({ x: 0, y: 0 });
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
