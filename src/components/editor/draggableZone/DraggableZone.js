// src/components/DraggableItem.js
import React, { useContext } from 'react';
import useDrag from '../../../hooks/useDrag';
import { DragContext } from '../../../contexts/DragContext';


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

import './DraggableZone.css';
import main from '../../../generator';

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

const draggableItems = [
  {
    type: 'EditableText', props: {
      children: 'Text'
    },
  },
  {
    type: 'Title', props: {
      children: "Title",
      level: 2,
    },
    width: 60,
    height: 30,
  },
  {
    type: 'Image', props: {
      src: "https://via.placeholder.com/350x150.jpg",
      alt: "Description de l'image"
    },
    width: 100,
    height: 100,
  },
  {
    type: 'Navbar', props: {

    },
    width: 500,
    height: 100,
  },
  {
    type: 'Footer', props: {

    },
    width: 500,
    height: 100,
  },
  {
    type: 'Button', props: {
      style: { padding: "10px 20px", margin: "5px" },
      styleTitle: { fontSize: "1rem" },
      children: <p>Button</p>,
    },
  },
  {
    type: 'Card', props: {
      style: { padding: "10px 20px", margin: "5px" },
      children: <p>Card</p>,
    },
  },
  {
    type: 'InputField', props: {
      style: { margin: "5px" },
      placeholder: "InputField",
    },
  },
  {
    type: 'Modal', props: {
      title: 'Modal',
      children: <p>Modal content</p>
    },
  },
  {
    type: 'ProgressBar', props: {
      percentage: 50,
      duration: 2,
      showText: true
    },
  },
  {
    type: 'Slider', props: {
      min: 0,
      max: 200,
      step: 5,
      defaultValue: 100,
      label: "Sélectionnez une valeur :",
      onChange: () => console.log('change')
    },
  }
  // ... Ajoutez d'autres éléments ici
];

const DraggableZone = ({ items }) => {
  const { itemList, setShowStyle } = useContext(DragContext);
  const { handleDragStart } = useDrag();

  return (
    <div className='draggableZone' onClick={() => setShowStyle(-1)}>
      <div>
        {draggableItems.map((item, index) => {
          const Component = componentMap[item.type];
          return (
            <div className='draggableZone-element' key={index} draggable onDragStart={(e) => handleDragStart(e, items[index], 'draggableZone', index)}>
              <Component {...item.props} />
            </div>
          );
        })}
      </div>
      <Button className='draggableZone-export' styleTitle={{ fontSize: '1.2rem' }} onClick={() => main(itemList)}>Exporter</Button>
    </div>
  );
};


export default DraggableZone;
