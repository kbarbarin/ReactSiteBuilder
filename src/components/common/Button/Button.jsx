import React from "react";
import './Button.css';

export default function Button({ className, styleTitle, children, ...props }) {
    return (
        <button
            className={`button ${className || ""}`}
            {...props} // Passer tous les autres props non destructurés
        >
            <h1 className="button-title" style={styleTitle}>
                {children}
            </h1>
        </button>
    );
}