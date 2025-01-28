// src/App.js
import React, { useContext, useEffect, useState } from 'react';
import { DragContext, DragProvider } from './contexts/DragContext';
import DraggableZone from './components/editor/draggableZone/DraggableZone';
import DropZone from './components/editor/dropZone/DropZone';
import DeleteZone from './components/editor/deleteZone/DeleteZone';
import StyleZone from './components/editor/styleZone/StyleZone';

import './styles/App.css';

const items = [
  {
    type: 'EditableText', props: {
      children: 'Text'
    },
    width: 80,
    height: 50,
  },
  {
    type: 'Title', props: {
      children: "Title",
      level: 2,
    },
    width: 100,
    height: 70,
  },
  {
    type: 'Image', props: {
      src: "https://via.placeholder.com/350x150.jpg",
      alt: "Description de l'image"
    },
    width: 350,
    height: 150,
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
      children: "Button",
    },
    left: 0,
    top: 0,
    width: 150,
    height: 50,
    isDraggable: true
  },
  {
    type: 'Card', props: {
    },
    width: 200,
    height: 60,
    isDraggable: true
  },
  {
    type: 'InputField', props: {
      placeholder: "InputField",
    },
    width: 70,
    height: 25,
    isDraggable: true
  },
  {
    type: 'Modal', props: {
      title: 'Modal',
      children: <p>Modal content</p>
    },
    width: 1000,
    height: 1000,
    isDraggable: true
  },
  {
    type: 'ProgressBar', props: {
      percentage: 50,
      duration: 2,
      showText: true
    },
    width: 600,
    height: 10,
    isDraggable: true
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
    width: 60,
    height: 30,
    isDraggable: true
  }
  // ... Ajoutez d'autres éléments ici
];


const App = () => {

  const DragContent = () => {
    const { draggedItem, sourceItem, showStyle } = useContext(DragContext)
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
      if (draggedItem && sourceItem === "dropzone")
        setShowDelete(true);
      else if (showDelete)
        setShowDelete(false);
    }, [draggedItem, sourceItem, showDelete])

    return (
      <div className='app-container'>
        {showDelete ? <DeleteZone /> : <DraggableZone items={items} />}
        <DropZone />
        {showStyle !== -2 && <StyleZone />}
      </div>
    )
  }
  return (
    <DragProvider>
      <DragContent />
    </DragProvider>
  );
};

export default App;
