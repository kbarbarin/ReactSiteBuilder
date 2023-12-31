// src/components/DraggableItem.js
import React, {useContext} from 'react';
import useDrag from '../../../hooks/useDrag';
import { DragContext } from '../../../contexts/DragContext';


import Button from '../../common/Button/Button';
import Card from '../../common/Card/Card';
import InputField from '../../common/InputField/InputField';
import Modal from '../../common/Modal/Modal';
import Slider from '../../common/Slider/Slider';
import ProgressBar from '../../common/ProgressBar/ProgressBar';

import './DraggableZone.css';
import main from '../../../generator';

const componentMap = {
    Button,
    Card,
    InputField,
    Modal,
    Slider,
    ProgressBar
};

const DraggableZone = ({ items }) => {
    const { itemList } = useContext(DragContext);
    const { handleDragStart } = useDrag();

    return (
        <div className='draggableZone'>
            <div>
                {items.map((item, index) => {
                    const Component = componentMap[item.type];
                    return (
                        <div className='draggableZone-element' key={index} draggable onDragStart={(e) => handleDragStart(e, item, 'draggableZone', index)}>
                            <Component {...item.props} />
                        </div>
                    );
                })}
            </div>
            <Button className='draggableZone-export' styleTitle={{fontSize: '1.2rem'}} onClick={() => main(itemList)}>Exporter</Button>
        </div>
    );
};


export default DraggableZone;
