import React, { useState } from 'react';

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
        <div className="editable-text">
            {isEditing ? (
                <input 
                    type="text" 
                    value={text} 
                    onChange={handleInputChange} 
                    onBlur={handleInputBlur}
                    autoFocus
                />
            ) : (
                <div onClick={handleTextClick}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default EditableText;
