import { useState, useCallback } from 'react';

const useMouseEvents = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    // Gestionnaire pour le début du glissement
    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setMousePosition({ x: e.clientX, y: e.clientY });
        // Ajouter d'autres logiques si nécessaire
    }, []);

    // Gestionnaire pour le mouvement de la souris
    const handleMouseMove = useCallback((e) => {
        if (isDragging) {
            setMousePosition({ x: e.clientX, y: e.clientY });
            // Ajouter la logique de redimensionnement ou de déplacement ici
        }
    }, [isDragging]);

    // Gestionnaire pour la fin du glissement
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        // Ajouter d'autres logiques de fin de glissement si nécessaire
    }, []);

    return {
        mousePosition,
        isDragging,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp
    };
};

export default useMouseEvents;
