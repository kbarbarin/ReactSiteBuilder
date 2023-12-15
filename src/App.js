// src/App.js
import React from 'react';
import { DragProvider } from './contexts/DragContext';
import DraggableItems from './components/editor/draggableItems/DraggableItems';
import DropZone from './components/editor/dropZone/DropZone';

import './styles/App.css'

const App = () => {
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

  return (
    <DragProvider>
      <div className='app-container'>
        <DraggableItems items={items} />
        <DropZone />
      </div>
    </DragProvider>
  );
};

export default App;
