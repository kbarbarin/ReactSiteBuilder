// src/App.js
import React, { useContext, useEffect, useState } from 'react';
import { DragContext, DragProvider } from './contexts/DragContext';
import DraggableZone from './components/editor/draggableZone/DraggableZone';
import DropZone from './components/editor/dropZone/DropZone';

import './styles/App.css'
import DeleteZone from './components/editor/deleteZone/DeleteZone';

const items = [
  {
    type: 'Button', props: {
      children: <p>Button</p>,
    }
  },
  {
    type: 'ProgressBar', props: {
      percentage: 50,
      duration: 2,
      showText: true
    }
  },
  {
    type: 'Slider', props: {
      min: 0,
      max: 200,
      step: 5,
      defaultValue: 100,
      label: "Sélectionnez une valeur :",
      onChange: () => console.log('change')
    }
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
    }, [draggedItem, sourceItem])

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
