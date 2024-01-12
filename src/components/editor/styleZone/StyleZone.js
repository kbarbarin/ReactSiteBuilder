import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DragContext } from '../../../contexts/DragContext';

import { TextOption, ButtonOption, CardOption } from './styleZoneOption/StyleZoneOption';

import './StyleZone.css';

export default function StyleZone () {
    const [isClosing, setIsClosing] = useState(false);
    const {itemList, setItemList, showStyle, setShowStyle} = useContext(DragContext);

    useEffect(() => {
        if (showStyle === -1) {
            setIsClosing(true);
          const timer = setTimeout(() => {
            setShowStyle(-2);
          }, 300);
          return () => clearTimeout(timer);
        }
      }, [showStyle]);

    const RenderOptions = useCallback(({item, setItemList}) => {
        switch (item?.type) {
            case 'EditableText':
                return (<TextOption item={item} setItemList={setItemList}/>);
            case 'Button':
                return (<ButtonOption item={item} setItemList={setItemList}/>);
            case 'Card':
                return (<CardOption item={item} setItemList={setItemList}/>);
            default:
                return null;
        }
    }, []);

    return (
        <div className={`styleZone ${isClosing ? 'disappear' : ''}`}>
            <RenderOptions item={itemList[showStyle]} setItemList={setItemList}/>
        </div>
    );
}