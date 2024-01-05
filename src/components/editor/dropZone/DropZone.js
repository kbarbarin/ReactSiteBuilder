// src/components/DropZone.js
import React, { useState, useContext, useEffect } from 'react';
import { Resizable } from 'react-resizable';
import "react-resizable/css/styles.css";

import { DragContext } from '../../../contexts/DragContext';
import useDrop from '../../../hooks/useDrop';
import useDrag from '../../../hooks/useDrag';
// import useMouseEvents from '../../../hooks/useMouseEvents';

import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';
import InputField from '../../common/InputField/InputField';
import Modal from '../../common/Modal/Modal';
import Slider from '../../common/Slider/Slider';
import ProgressBar from '../../common/ProgressBar/ProgressBar';

import './DropZone.css'

const componentMap = {
    Button,
    Card,
    InputField,
    Modal,
    Slider,
    ProgressBar
};

const DropZone = () => {
    const { handleDrop, handleDragOver } = useDrop();
    const { itemList } = useContext(DragContext);
    const { handleDragStart } = useDrag();
    const [items, setItems] = useState(itemList);
    const [size, setSize] = useState({ width: 200, height: 200 });

    useEffect(() => {
        const modifiedItems = itemList.map(item => {
            const newProps = { ...item.props };

            delete newProps.style;
            delete newProps.styleTitle;

            return { ...item, props: newProps };
        });

        setItems(modifiedItems);
    }, [itemList]);

    // const onResize = (event, { element, size, handle }) => {
    //     setSize({ width: size.width, height: size.height });
    // };

    const onResize = (index) => (event, { element, size, handle }) => {
        setSize({ width: size.width, height: size.height })
        const updatedItems = items.map((item, idx) => {
            if (idx === index) {
                return { ...item, width: size.width, height: size.height };
            }
            return item;
        });

        // Mettre à jour l'état avec le nouveau tableau
        setItems(updatedItems);
    };

    return (
        <div className='dropZone' onDrop={(e) => handleDrop(e, 'dropzone')} onDragOver={(e) => handleDragOver(e)}>
            {items.length > 0 && (
                items.map((item, index) => {
                    const Component = componentMap[item.type];
                    const style = {
                        gridColumnStart: item.gridColumn,
                        width: item.width,
                        height: item.height,
                        // gridColumnEnd: item.gridColumn + item.sizeWidth,
                        gridRowStart: item.gridRow,
                        // gridRowEnd: item.gridRow + item.sizeHeight,
                    };
                    return (
                        // <div key={index} width={item.width} height={item.height} draggable={item.draggable} onDragStart={(e) => handleDragStart(e, item, 'dropzone', index)}>
                        // <Resizable className="box" onResize={onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                        //     <Component style={{ width: item.width + 'px', height: item.height + 'px', background: 'lightgrey' }} {...item.props} />
                        // </Resizable>
                        // </div>
                        <div key={index}  style={style} draggable={item.draggable} onDragStart={(e) => handleDragStart(e, item, 'dropzone', index)}>
                            <Resizable
                                className="box"
                                style={style}
                                width={item.width}
                                height={item.height}
                                onResize={onResize(index)}
                                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']} // Spécifiez ici les poignées de redimensionnement
                            >
                                <div style={{ width: item.width + 'px', height: item.height + 'px', background: 'lightgrey' }}>
                                    <Component style={{ width: '100%', height: '100%', background: 'lightgrey' }} {...item.props} />
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

// import React, { useState } from 'react';
// import { Resizable, ResizableBox } from 'react-resizable';
// import "react-resizable/css/styles.css";
// import './DropZone.css'

// const DropZone = () => {
//     const [size, setSize] = useState({ width: 200, height: 200 });

//     const onResize = (event, { element, size, handle }) => {
//         setSize({ width: size.width, height: size.height });
//     };

//     const onResetClick = () => {
//         setSize({ width: 300, height: 300 });
//     };

//     return (
//         // <div className='dropZone'>
//         <Resizable
//             className="box"
//             width={size.width}
//             height={size.height}
//             onResize={onResize}
//             resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']} // Spécifiez ici les poignées de redimensionnement
//         >
//             <div
//                 style={{ width: size.width + 'px', height: size.height + 'px', background: 'lightgrey' }}
//             >
//                 <p>Contenu redimensionnable</p>
//             </div>
//         </Resizable>
//         // <ResizableBox
//         //     className="custom-box box"
//         //     width={200}
//         //     height={200}
//         //     handle={<span className="custom-handle custom-handle-se" />}
//         //     handleSize={[8, 8]}>
//         //     <span className="text">{"<ResizableBox> with custom overflow style & handle in SE corner."}</span>
//         //   </ResizableBox>
//         // </div>
//     );
// };

// export default DropZone;