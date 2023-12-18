// src/App.js
import React, { useContext } from 'react';
import { DragContext, DragProvider } from './contexts/DragContext';
import DraggableItems from './components/editor/draggableItems/DraggableItems';
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
    const { draggedItem } = useContext(DragContext)

    return (
      <div className='app-container'>
        {draggedItem ? <DeleteZone /> : <DraggableItems items={items} />}
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
