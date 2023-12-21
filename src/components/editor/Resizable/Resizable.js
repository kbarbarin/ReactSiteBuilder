import React, { useRef, useState, useEffect } from 'react';
import useMouseEvents from '../../../hooks/useMouseEvents';

const BORDER_SENSITIVITY = 10; // pixels près du bord pour activer le redimensionnement

const Resizable = ({ children }) => {
    const [size, setSize] = useState({ width: 200, height: 200 });
    const resizableRef = useRef(null);
    const { handleMouseDown, handleMouseUp } = useMouseEvents();

    const handleMouseOver = (e) => {
        if (isMouseOnBorder(e)) {
            // Changer le style du curseur
            e.currentTarget.style.cursor = 'se-resize'; // ou un autre style de curseur selon la bordure
        }
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.cursor = 'default'; // Réinitialise le style du curseur
    };

    const handleMouseMove = (e) => {
        if (resizableRef?.current) {
            const { nearLeftEdge, nearRightEdge, nearTopEdge, nearBottomEdge } = isMouseOnBorder(e);

            if ((nearRightEdge && nearBottomEdge) || (nearLeftEdge && nearTopEdge)) {
                e.currentTarget.style.cursor = 'nwse-resize';
            } else if ((nearLeftEdge && nearBottomEdge) || (nearRightEdge && nearTopEdge)) {
                e.currentTarget.style.cursor = 'nesw-resize';
            }else if (nearRightEdge || nearLeftEdge) {
                e.currentTarget.style.cursor = 'ew-resize';
            } else if (nearBottomEdge || nearTopEdge) {
                e.currentTarget.style.cursor = 'ns-resize';
            } else {
                e.currentTarget.style.cursor = 'default';
            }
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

            const nearLeftEdge = distanceFromLeft < BORDER_SENSITIVITY;
            const nearRightEdge = distanceFromRight < BORDER_SENSITIVITY;
            const nearTopEdge = distanceFromTop < BORDER_SENSITIVITY;
            const nearBottomEdge = distanceFromBottom < BORDER_SENSITIVITY;

            return { nearLeftEdge, nearRightEdge, nearTopEdge, nearBottomEdge };
        }
    };

    useEffect(() => {
        if (resizableRef?.current) {
            const resizable = resizableRef.current;
            resizable.addEventListener('mousemove', handleMouseMove);
            resizable.addEventListener('mouseup', handleMouseUp);

            return () => {
                resizable.removeEventListener('mousemove', handleMouseMove);
                resizable.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={resizableRef}
            style={{
                width: size.width,
                height: size.height,
                position: 'relative',
                boxSizing: 'border-box',
                border: '4px solid transparent',
                margin: '10px',
                padding: '10px',
                backgroundColor: 'lightgray'
            }}
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