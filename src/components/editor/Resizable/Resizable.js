import React, { useRef } from "react";

export default function Resizable ({ children, index, style }) {
    const resizableRef = useRef(null);
    const moreStyle = { border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }

    return (
        <div
            ref={resizableRef}
            style={{ ...style, ...moreStyle }}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
            // onMouseDown={handleMouseDown}
            // onMouseMove={handleMouseMove}
            // onMouseUp={handleMouseUp}
        >
            {children}
        </div>
    );
}