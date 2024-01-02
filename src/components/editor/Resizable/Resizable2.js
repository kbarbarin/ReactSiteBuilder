import React, { useRef, useState, useContext } from 'react';
import { DragContext } from '../../../contexts/DragContext';

const BORDER_SENSITIVITY = 30; // pixels près du bord pour activer le redimensionnement

const Resizable = ({ children, index, style }) => {
    const resizableRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: null, y: null });
    const [isBorderCursor, setIsborderCursor] = useState(false);
    const { itemList, setItemList } = useContext(DragContext)    // const { handleMouseDown, handleMouseUp } = useMouseEvents();

    const handleMouseOver = (e) => {
        if (isMouseOnBorder(e) && !isBorderCursor) {
            // Changer le style du curseur
            e.currentTarget.style.cursor = 'se-resize'; // ou un autre style de curseur selon la bordure
        }
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.cursor = 'default'; // Réinitialise le style du curseur
    };

    const handleMouseMove = (e) => {
        var isOnBorder = false;
        const currentPosition = { x: e.clientX, y: e.clientY };
        const { nearLeftEdge, nearRightEdge, nearTopEdge, nearBottomEdge } = isMouseOnBorder(e);
        const deltaThreshold = 10;

        const deltaX = currentPosition.x - lastPosition.x;
        const deltaY = currentPosition.y - lastPosition.y;
        // console.log('old X = ' + lastPosition.x + ' old Y = ' + lastPosition.y);
        // console.log('new X = ' + currentPosition.x + ' new Y = ' + currentPosition.y);

        if (Math.abs(deltaX) > deltaThreshold || Math.abs(deltaY) > deltaThreshold) {
            let directionX = deltaX === 0 ? '' : (deltaX > 0 ? 'droite' : 'gauche');
            let directionY = deltaY === 0 ? '' : (deltaY > 0 ? 'bas' : 'haut');

            if (directionX && directionY) {
                console.log(`Déplacement diagonalement vers le ${directionY} et vers la ${directionX}`);
            } else if (directionX) {
                console.log(`Déplacement horizontal vers la ${directionX}`);
            } else if (directionY) {
                console.log(`Déplacement vertical vers le ${directionY}`);
            }
        }
        setLastPosition(currentPosition);

        if (resizableRef?.current) {
            if ((nearRightEdge && nearBottomEdge) || (nearLeftEdge && nearTopEdge)) {
                e.currentTarget.style.cursor = 'nwse-resize';
                setIsborderCursor(true);
                isOnBorder = true;
            } else if ((nearLeftEdge && nearBottomEdge) || (nearRightEdge && nearTopEdge)) {
                e.currentTarget.style.cursor = 'nesw-resize';
                setIsborderCursor(true);
                isOnBorder = true;
            } else if (nearRightEdge || nearLeftEdge) {
                e.currentTarget.style.cursor = 'ew-resize';
                setIsborderCursor(true);
                isOnBorder = true;
            } else if (nearBottomEdge || nearTopEdge) {
                e.currentTarget.style.cursor = 'ns-resize';
                setIsborderCursor(true);
                isOnBorder = true;
            } else {
                e.currentTarget.style.cursor = 'default';
                setIsborderCursor(false);
                if (isResizing) {
                    setIsResizing(false);
                    console.log("setIsResizing false");
                }

                isOnBorder = false;
            }
        }
        if (isResizing && isOnBorder) {
            const newItems = [...itemList];

            const itemToUpdate = newItems[index];
            if (nearRightEdge) {
                itemToUpdate.sizeWidth += 1;
            } else if (nearLeftEdge) {
                itemToUpdate.gridColumn -= 1;
                itemToUpdate.sizeWidth += 1;
            } else if (nearBottomEdge) {
                itemToUpdate.sizeHeight += 1;
            } else if (nearTopEdge) {
                itemToUpdate.gridRow -= 1;
                itemToUpdate.sizeHeight += 1;
            }
            setItemList(newItems);
        }
    };

    const isMouseOnBorder = (e) => {
        if (resizableRef?.current) {
            const { left, top, width, height } = resizableRef.current.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const distanceFromLeft = mouseX - left;
            const distanceFromTop = mouseY - top;
            const distanceFromRight = left + width - mouseX;
            const distanceFromBottom = top + height - mouseY;

            console.log('left = ' + distanceFromLeft);
            console.log('right = ' + distanceFromRight);
            console.log('top = ' + distanceFromTop);
            console.log('bottom = ' + distanceFromBottom);

            const nearLeftEdge = distanceFromLeft < BORDER_SENSITIVITY;
            const nearRightEdge = distanceFromRight < BORDER_SENSITIVITY;
            const nearTopEdge = distanceFromTop < BORDER_SENSITIVITY;
            const nearBottomEdge = distanceFromBottom < BORDER_SENSITIVITY;

            return { nearLeftEdge, nearRightEdge, nearTopEdge, nearBottomEdge };
        }
    };

    const handleMouseDown = (e) => {
        if (!isResizing) {
            setIsResizing(true);
            // document.addEventListener('mouseup', handleMouseUp);
            console.log("setIsResizing true");
        }
    };

    const handleMouseUp = (e) => {
        if (isResizing) {
            setIsResizing(false);
            // document.removeEventListener('mouseup', handleMouseUp);
            console.log("setIsResizing false");
        }
    };

    // useEffect(() => {
    //     if (resizableRef?.current) {
    //         const resizable = resizableRef.current;
    //         resizable.addEventListener('mousemove', handleMouseMove);
    //         resizable.addEventListener('mouseup', handleMouseUp);

    //         return () => {
    //             resizable.removeEventListener('mousemove', handleMouseMove);
    //             resizable.removeEventListener('mouseup', handleMouseUp);
    //         };
    //     }// eslint-disable-next-line
    // }, []);

    const style2 = { border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }

    return (
        <div
            ref={resizableRef}
            style={{ ...style, ...style2 }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
};

export default Resizable;