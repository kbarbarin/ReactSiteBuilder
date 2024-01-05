import React, { useState, useCallback } from 'react';

const ResizableBox = ({ initialWidth, initialHeight, children }) => {
    const [size, setSize] = useState({ width: initialWidth, height: initialHeight });
    const [dragging, setDragging] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = useCallback((e) => {
        setDragging(true);
        setLastPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleDrag = useCallback((e) => {
        if (dragging) {
            const deltaX = e.clientX - lastPosition.x;
            const deltaY = e.clientY - lastPosition.y;
            setSize(prevSize => ({
                width: prevSize.width + deltaX,
                height: prevSize.height + deltaY
            }));
            setLastPosition({ x: e.clientX, y: e.clientY });
        }
    }, [dragging, lastPosition]);

    const handleDragEnd = useCallback(() => {
        setDragging(false);
    }, []);

    return (
        <div style={{ width: size.width, height: size.height, position: 'relative', resize: 'both', overflow: 'auto' }}>
            {children}
            <div
                onMouseDown={handleDragStart}
                onMouseMove={dragging ? handleDrag : null}
                onMouseUp={handleDragEnd}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    cursor: 'se-resize',
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'blue'
                }}
            />
        </div>
    );
};

const MyComponent = () => {
    return (
        <ResizableBox initialWidth={200} initialHeight={200}>
            <div style={{ backgroundColor: 'lightgray', width: '100%', height: '100%' }}>
                Vous pouvez me redimensionner!
            </div>
        </ResizableBox>
    );
};

export default MyComponent;
