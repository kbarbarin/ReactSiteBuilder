import React, { useState } from 'react';
import './Title.css';

const Title = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(props?.children);

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
        <div className={`title-component ${props?.className}`} style={props?.style} onClick={handleTextClick}>
            {isEditing ?
                <input 
                type="text"
                    style={props?.titleStyle}
                    value={text}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    autoFocus
                />
                :
                <h1 style={props.titleStyle}>{text}</h1>
            }
        </div>
    );
};

export default Title;
