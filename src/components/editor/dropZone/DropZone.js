// src/components/DropZone.js
import React, { useContext, useRef } from 'react';
import { Resizable } from 'react-resizable';
import "react-resizable/css/styles.css";

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';
import useDrag from '../../../hooks/useDrag';

import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';
import InputField from '../../common/InputField/InputField';
import Modal from '../../common/Modal/Modal';
import Slider from '../../common/Slider/Slider';
import ProgressBar from '../../common/ProgressBar/ProgressBar';
import EditableText from '../../common/EditableText/EditableText';
import Title from '../../common/Title/Title';
import Image from '../../common/Image/Image';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';

import './DropZone.css'

const componentMap = {
    Button,
    Card,
    InputField,
    Modal,
    Slider,
    ProgressBar,
    EditableText,
    Title,
    Image,
    Navbar,
    Footer,  
};

const BORDER_SENSITIVITY = 10;

const DropZone = () => {
    const { handleDrop, handleDragOver } = useDrop();
    const { itemList, setItemList, showStyle, setShowStyle } = useContext(DragContext);
    const { handleDragStart } = useDrag();
    const resizableRef = useRef(null);

    const onResize = (index) => (event, { node, size }) => {
        if (!size)
            return;

        const updatedItems = itemList.map((item, idx) => {
            if (idx === index) {
                return { ...item, width: size.width, height: size.height };
            }
            return item;
        });

        setItemList(updatedItems);
    };

    const updateDrag = (e, index, value) => {
        const updatedItems = itemList.map((item, idx) => {
            if (idx === index) {
                const { nearLeftEdge, nearRightEdge, nearTopEdge, nearBottomEdge } = isMouseOnBorder(e);
                if (nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge) {
                    return { ...item, isDraggable: value };
                }
            }
            return item;
        });

        setItemList(updatedItems);
    };

    const isMouseOnBorder = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
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
    };

    return (
        <div
            className='dropZone'
            onDrop={(e) => handleDrop(e, 'dropzone')}
            onDragOver={(e) => handleDragOver(e)}
        >
            {itemList.length > 0 && (
                itemList.map((item, index) => {
                    const Component = componentMap[item.type];
                    const style = {
                        position: 'absolute',
                        left: item.left,
                        top: item.top,
                        width: item.width,
                        height: item.height,
                    };
                    return (
                        <div
                            key={index}
                            ref={resizableRef}
                            style={style}
                            draggable={item.isDraggable}
                            onClick={() => setShowStyle(index)}
                            onMouseDown={(e) => { updateDrag(e, index, false) }}
                            onMouseUp={(e) => { updateDrag(e, index, true) }}
                            onMouseLeave={(e) => { updateDrag(e, index, true) }}
                            onDragStart={(e) => handleDragStart(e, item, 'dropzone', index)}
                        >
                            <Resizable
                                className={showStyle === index ? "box" : "box hover-handles"}
                                width={item.width}
                                height={item.height}
                                minConstraints={[50, 30]}
                                onResize={onResize(index)}
                                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']} // Spécifiez ici les poignées de redimensionnement
                            >
                                <div style={{ width: item.width + 'px', height: item.height + 'px' }}>
                                <Component style={{ width: '100%', height: '100%', ...item.props?.style }} {...item.props} />
                                </div>
                            </Resizable>
                        </div>
                    );
                })
            )}
        </div>
    );
};
export default DropZone;