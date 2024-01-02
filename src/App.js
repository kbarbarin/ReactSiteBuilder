// src/App.js
import React, { useContext, useEffect, useState } from 'react';
import { DragContext, DragProvider } from './contexts/DragContext';
import DraggableZone from './components/editor/draggableZone/DraggableZone';
import DropZone from './components/editor/dropZone/DropZone';
import DeleteZone from './components/editor/deleteZone/DeleteZone';

import './styles/App.css'

const items = [
  {
    type: 'Button', props: {
      style: {padding: "10px 20px", margin: "5px"},
      styleTitle: {fontSize: "1rem"},
      children: <p>Button</p>,
    },
    sizeWidth: 3,
    sizeHeight: 1,
  },
  {
    type: 'Card', props: {
      style: {padding: "10px 20px", margin: "5px"},
      children: <p>Card</p>,
    },
    sizeWidth: 3,
    sizeHeight: 6,
  },
  {
    type: 'InputField', props: {
      style: {margin: "5px"},
      placeholder: "InputField",
    },
    sizeWidth: 7,
    sizeHeight: 2,
  },
  {
    type: 'Modal', props: {
      title: 'Modal',
      children: <p>Modal content</p>
    },
    sizeWidth: 10,
    sizeHeight: 10,
  },
  {
    type: 'ProgressBar', props: {
      percentage: 50,
      duration: 2,
      showText: true
    },
    sizeWidth: 6,
    sizeHeight: 1,
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
    sizeWidth: 6,
    sizeHeight: 3,
  }
  // ... Ajoutez d'autres éléments ici
];


const App = () => {

  const DragContent = () => {
    const { draggedItem, sourceItem } = useContext(DragContext)
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
      if (draggedItem && sourceItem === "dropzone")
        setShowDelete(true)
      else if (showDelete)
        setShowDelete(false)
    }, [draggedItem, sourceItem, showDelete])

    return (
      <div className='app-container'>
        {showDelete ? <DeleteZone /> : <DraggableZone items={items} />}
        <DropZone />
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
