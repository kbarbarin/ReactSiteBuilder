import React, { useState } from 'react';

import './EditableText.css'

const EditableText = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props.children);

    const handleTextClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
    };

    return (
        <div style={props?.style} className={isEditing ? "editable-input" : "editable-text"}>
            {isEditing ? (
                <input
                    type="text"
                    style={props?.style}
                    value={text}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoFocus
                />
            ) : (
                <div style={props?.style} onClick={handleTextClick}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default EditableText;