import { useCallback } from 'react';
import './StyleZoneOption.css'

const TextOption = ({ item, setItemList }) => {
    const handleStyleChange = useCallback((e) => {
        const updatedStyle = { ...item.props.style, [e.target.name]: e.target.value };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    }, [item, setItemList]);

    return (
        <div className="styleZoneOption">
            <div className="styleZoneOption-element">
                <label htmlFor="textColor">Couleur du texte:</label>
                <input
                    type="color"
                    id="textColor"
                    name="color"
                    value={item.props?.style?.color || ''}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <label htmlFor="fontSize">Taille de la police:</label>
                <input
                    type="text"
                    id="fontSize"
                    name="fontSize"
                    value={item.props?.style?.fontSize || '1.5rem'}
                    onChange={handleStyleChange}
                />
            </div>
        </div>
    );
};



const ButtonOption = ({ item, setItemList }) => {
    const handleStyleChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: { ...item.props.style, [e.target.name]: e.target.value } } } : it));
    }, [item, setItemList]);

    const handleStyleTitleChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, styleTitle: { ...item.props.styleTitle, [e.target.name]: e.target.value } } } : it));
    }, [item, setItemList]);

    const handleChildrenChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, children: e.target.value } } : it));
    }, [item, setItemList]);

    return (
        <div className="styleZoneOption">
            <div className="styleZoneOption-element">
                <label htmlFor="backgroundColor">Couleur de fond:</label>
                <input
                    type="color"
                    id="backgroundColor"
                    name="backgroundColor"
                    value={item.props?.style?.backgroundColor || '#1e6ca6'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <label htmlFor="textColor">Couleur du texte:</label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={item.props?.styleTitle?.color || '#ffffff'}
                    onChange={handleStyleTitleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <label htmlFor="textColor">Texte du bouton:</label>
                <input
                    type="text"
                    id="text"
                    name="text"
                    value={item.props?.children}
                    onChange={handleChildrenChange}
                />
            </div>

        </div>
    );
};


const CardOption = ({ item, setItemList }) => {
    const handleStyleChange = (e) => {
        const updatedStyle = { ...item.props.style, [e.target.name]: e.target.value };

        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    };

    return (
        <div className="styleZoneOption">
            <div className="styleZoneOption-element">
                <label htmlFor="boxShadow">Ombre portée:</label>
                <input
                    type="text"
                    id="boxShadow"
                    name="boxShadow"
                    value={item.props?.style?.boxShadow || ''}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <label htmlFor="margin">Marge:</label>
                <input
                    type="number"
                    id="margin"
                    name="margin"
                    value={item.props?.style?.margin || ''}
                    onChange={handleStyleChange}
                />
            </div>
        </div>
    );
};


export { TextOption, ButtonOption, CardOption }