// src/App.js
import React from 'react';
import { DragProvider } from './contexts/DragContext';
import DraggableItems from './components/editor/draggableItems/DraggableItems';
import DropZone from './components/editor/dropZone/DropZone';

import './styles/App.css'

const App = () => {
  const items = ["Button", "Input"]
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
