import React, { useContext, useState } from 'react';
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

// Icônes pour chaque composant

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

// Regroupement des composants par thème
const groupedComponents = {
  Text: ['EditableText', 'Title'],
  Containers: ['Card', 'Modal', 'Navbar', 'Footer'],
  Inputs: ['InputField', 'Slider'],
  Media: ['Image'],
  Progress: ['ProgressBar'],
  Buttons: ['Button'],
};

const DraggableZone = ({ items }) => {
  const { itemList, setShowStyle } = useContext(DragContext);
  const { handleDragStart } = useDrag();
  const [openCategories, setOpenCategories] = useState({});

  // Fonction pour ouvrir/fermer une catégorie
  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className='draggableZone' onClick={() => setShowStyle(-1)}>
      {Object.entries(groupedComponents).map(([category, components]) => (
        <div className='draggableZone-category' key={category}>
          <div
            className='draggableZone-category-header'
            onClick={() => toggleCategory(category)}
          >
            <span>{category}</span>
            <span>
              {openCategories[category] ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </span>
          </div>
          {openCategories[category] && (
            <div className='draggableZone-category-content'>
              {components.map((type, index) => {
                const Component = componentMap[type];
                const item = items.find((item) => item.type === type);
                return (
                  <div
                    className='draggableZone-element'
                    key={index}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, 'draggableZone', index)}
                  >
                    <Component {...item?.props} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
      <Button
        className='draggableZone-export'
        styleTitle={{ fontSize: '1.2rem' }}
        onClick={() => main(itemList)}
      >
        Exporter
      </Button>
    </div>
  );
};

export default DraggableZone;