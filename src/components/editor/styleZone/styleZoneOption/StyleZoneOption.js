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
                <p>Couleur du texte:</p>
                <input
                    type="color"
                    id="textColor"
                    name="color"
                    value={item.props?.style?.color || ''}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Taille de la police:</p>
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
                <p>Couleur de fond:</p>
                <input
                    type="color"
                    name="backgroundColor"
                    value={item.props?.style?.backgroundColor || '#1e6ca6'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Couleur du texte:</p>
                <input
                    type="color"
                    name="color"
                    value={item.props?.styleTitle?.color || '#ffffff'}
                    onChange={handleStyleTitleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Border Radius du bouton:</p>
                <input
                    type="text"
                    name="borderRadius"
                    value={item.props?.style?.borderRadius || '5px'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Taille du texte:</p>
                <input
                    type="text"
                    name="fontSize"
                    value={item.props?.styleTitle?.fontSize || '0.5rem'}
                    onChange={handleStyleTitleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Texte du bouton:</p>
                <input
                    type="text"
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
                <p>Ombre portée:</p>
                <input
                    type="text"
                    id="boxShadow"
                    name="boxShadow"
                    value={item.props?.style?.boxShadow || ''}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Marge:</p>
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