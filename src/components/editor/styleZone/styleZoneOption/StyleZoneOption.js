import { useCallback, useState } from 'react';
import './StyleZoneOption.css'

const TextOption = ({ item, setItemList }) => {
    const [fontSize, setFontSize] = useState(item.props?.style?.fontSize?.match(/\d+/) || 16);
    const [fontUnit, setFontUnit] = useState(item.props?.style?.fontSize?.replace(/[0-9]/g, '') || 'px');

    const handleStyleChange = useCallback((e) => {
        const updatedStyle = { ...item.props.style, [e.target.name]: e.target.value };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    }, [item, setItemList]);

    const handleFontSizeChange = useCallback((e) => {
        setFontSize(e.target.value);
        const updatedStyle = { ...item.props.style, fontSize: `${e.target.value}${fontUnit}` };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    }, [item, setItemList, fontUnit]);
    const handleFontUnitChange = useCallback((e) => {
        setFontUnit(e.target.value);
        const updatedStyle = { ...item.props.style, fontSize: `${fontSize}${e.target.value}` };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    }, [item, setItemList, fontSize]);

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
                    type="number"
                    id="fontSize"
                    name="fontSize"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <select
                    name="fontUnit"
                    value={fontUnit}
                    onChange={handleFontUnitChange}
                >
                    <option value="px">px</option>
                    <option value="rem">rem</option>
                    <option value="em">em</option>
                    <option value="%">%</option>
                </select>
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
    const [fontSize, setFontSize] = useState(item.props?.style?.fontSize?.match(/\d+/) || 16);
    const [fontUnit, setFontUnit] = useState(item.props?.style?.fontSize?.replace(/[0-9]/g, '') || 'px');

    const handleStyleChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: { ...item.props.style, [e.target.name]: e.target.value } } } : it));
    }, [item, setItemList]);

    const handleStyleTitleChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, styleTitle: { ...item.props.styleTitle, [e.target.name]: e.target.value } } } : it));
    }, [item, setItemList]);

    const handleFontSizeChange = useCallback((e) => {
        setFontSize(e.target.value);
        const updatedStyle = { ...item.props.styleTitle, fontSize: `${e.target.value}${fontUnit}` };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, styleTitle: updatedStyle } } : it));
    }, [item, setItemList, fontUnit]);

    const handleFontUnitChange = useCallback((e) => {
        setFontUnit(e.target.value);
        const updatedStyle = { ...item.props.styleTitle, fontSize: `${fontSize}${e.target.value}` };
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, styleTitle: updatedStyle } } : it));
    }, [item, setItemList, fontSize]);

    const handleChildrenChange = useCallback((e) => {
        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, children: e.target.value } } : it));
    }, [item, setItemList]);

    const handleShadowChange = (property, value) => {
        const updatedShadow = { ...item.props.style?.boxShadow, [property]: value };
        const updatedStyle = { ...item.props.style, boxShadow: updatedShadow };

        setItemList(prevItems => prevItems.map(it => it === item ? { ...item, props: { ...item.props, style: updatedStyle } } : it));
    };

    const { boxShadow } = item.props.style || {};
    const { hOffset, vOffset, blur, color } = boxShadow || {};

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
                <p>Taille de la police:</p>
                <input
                    type="number"
                    id="fontSize"
                    name="fontSize"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
                <select
                    name="fontUnit"
                    value={fontUnit}
                    onChange={handleFontUnitChange}
                >
                    <option value="px">px</option>
                    <option value="rem">rem</option>
                    <option value="em">em</option>
                    <option value="%">%</option>
                </select>
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
            <div className="styleZoneOption-section">
                <p>Box Shadow:</p>
                <div className="styleZoneOption-element">
                    <label>Horizontal Offset:</label>
                    <input
                        type="text"
                        value={hOffset || '5px'}
                        onChange={(e) => handleShadowChange('hOffset', e.target.value)}
                    />
                </div>
                <div className="styleZoneOption-element">
                    <label>Vertical Offset:</label>
                    <input
                        type="text"
                        value={vOffset || '5px'}
                        onChange={(e) => handleShadowChange('vOffset', e.target.value)}
                    />
                </div>
                <div className="styleZoneOption-element">
                    <label>Blur:</label>
                    <input
                        type="text"
                        value={blur || '15px'}
                        onChange={(e) => handleShadowChange('blur', e.target.value)}
                    />
                </div>
                <div className="styleZoneOption-element">
                    <label>Color:</label>
                    <input
                        type="color"
                        value={color || '#000000'}
                        onChange={(e) => handleShadowChange('color', e.target.value)}
                    />
                </div>
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