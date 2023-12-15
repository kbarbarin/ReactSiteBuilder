import React from 'react';
import ComponentList from './components/editor/componentList/ComponentList';
import ConstructionArea from './components/editor/constructionArea/ConstructionArea';
import './styles/App.css'; // Assurez-vous d'avoir ce fichier CSS

const App = () => {
    return (
        <div className="app-container">
            <ComponentList />
            <ConstructionArea />
        </div>
    );
};

export default App;
