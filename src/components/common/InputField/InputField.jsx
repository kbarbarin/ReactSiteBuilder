import React from 'react';
import './InputField.css';

export default function InputField(props) {
    return (
        <div className={`input-field ${props?.className || ''}`}>
            {props?.label && <label htmlFor={props?.id}>{props.label}</label>}
            <input
                id={props?.id}
                ref={props.inputRef}
                type={props?.type || 'text'}
                value={props?.value}
                onChange={props?.onChange}
                placeholder={props?.placeholder}
                style={props?.style}
            />
        </div>
    );
}
