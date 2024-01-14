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
            <div className="styleZoneOption-element">
                <p>Alignement du texte:</p>
                <select
                    name="textAlign"
                    value={item.props?.style?.textAlign || 'left'}
                    onChange={handleStyleChange}
                >
                    <option value="left">Gauche</option>
                    <option value="center">Centré</option>
                    <option value="right">Droite</option>
                </select>
            </div>
            <div className="styleZoneOption-element">
                <p>Poids de la police:</p>
                <select
                    name="fontWeight"
                    value={item.props?.style?.fontWeight || '400'}
                    onChange={handleStyleChange}
                >
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="800">800</option>
                    <option value="900">900</option>
                </select>
            </div>
            <div className="styleZoneOption-element">
                <p>Style de la police:</p>
                <select
                    name="fontStyle"
                    value={item.props?.style?.fontStyle || 'normal'}
                    onChange={handleStyleChange}
                >
                    <option value="normal">Normal</option>
                    <option value="italic">Italique</option>
                </select>
            </div>
            <div className="styleZoneOption-element">
                <p>Décoration du texte:</p>
                <select
                    name="textDecoration"
                    value={item.props?.style?.textDecoration || 'none'}
                    onChange={handleStyleChange}
                >
                    <option value="none">Aucun</option>
                    <option value="underline">Souligné</option>
                    <option value="line-through">Barré</option>
                </select>
            </div>
            <div className="styleZoneOption-element">
                <p>Espacement des lettres:</p>
                <input
                    type="text"
                    id="letterSpacing"
                    name="letterSpacing"
                    value={item.props?.style?.letterSpacing || 'normal'}
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
                <p>Border Radius du bouton:</p>
                <input
                    type="text"
                    name="borderRadius"
                    value={item.props?.style?.borderRadius || '5px'}
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
            <div className="styleZoneOption-element">
                <p>Opacité du bouton:</p>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    name="opacity"
                    value={item.props?.style?.opacity || '1'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Largeur du bouton:</p>
                <input
                    type="text"
                    name="width"
                    value={item.props?.style?.width || 'auto'}
                    onChange={handleStyleChange}
                />
                <p>Hauteur du bouton:</p>
                <input
                    type="text"
                    name="height"
                    value={item.props?.style?.height || 'auto'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Ombre portée:</p>
                <input
                    type="text"
                    name="boxShadow"
                    value={item.props?.style?.boxShadow || ''}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Couleur de la bordure:</p>
                <input
                    type="color"
                    name="borderColor"
                    value={item.props?.style?.borderColor || '#000000'}
                    onChange={handleStyleChange}
                />
                <p>Style de la bordure:</p>
                <select
                    name="borderStyle"
                    value={item.props?.style?.borderStyle || 'solid'}
                    onChange={handleStyleChange}
                >
                    <option value="solid">Solid</option>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="none">None</option>
                </select>
                <p>Épaisseur de la bordure:</p>
                <input
                    type="text"
                    name="borderWidth"
                    value={item.props?.style?.borderWidth || '1px'}
                    onChange={handleStyleChange}
                />

            </div>
            <div className="styleZoneOption-element">
                <p>Espacement intérieur (Padding):</p>
                <input
                    type="text"
                    name="padding"
                    value={item.props?.style?.padding || '10px'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Couleur de fond au survol:</p>
                <input
                    type="color"
                    name="hoverBackgroundColor"
                    value={item.props?.style?.hoverBackgroundColor || '#1e90ff'}
                    onChange={handleStyleChange}
                />
            </div>
            <div className="styleZoneOption-element">
                <p>Curseur:</p>
                <select
                    name="cursor"
                    value={item.props?.style?.cursor || 'pointer'}
                    onChange={handleStyleChange}
                >
                    <option value="pointer">Pointer</option>
                    <option value="default">Default</option>
                    <option value="not-allowed">Not-allowed</option>
                </select>
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