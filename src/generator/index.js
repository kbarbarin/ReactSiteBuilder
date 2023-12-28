import { useContext, useEffect, useState } from 'react';
import JSZip from 'jszip';

import { index, manifest } from './templates/publicFolder';
import { packages } from './templates/package';
import { App, jsIndex, cssIndex } from './templates/src';
import { button } from './templates/common';
import { DragContext } from '../contexts/DragContext';

export default function Main() {
    const [appContain, setAppContain] = useState("<div>Hello World</div>");
    const { itemList } = useContext(DragContext);
    const zip = new JSZip();

    useEffect(() => {
        if (itemList) {
            
        }
    }, [itemList])

    function downloadBlob(blob, filename) {
        const url = window.URL.createObjectURL(blob); // Crée un URL pour le Blob
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url); // Nettoie l'URL après le téléchargement
        a.remove();
    }

    // Créer des fichiers
    zip.file("package.json", packages);

    const publicFolder = zip.folder('public');

    publicFolder.file('index.html', index);
    publicFolder.file('manifest.json', manifest);

    const srcFolder = zip.folder("src");

    srcFolder.file("App.js", App(appContain));
    srcFolder.file("index.js", jsIndex);

    const styleFolder = zip.folder("src/style");

    styleFolder.file("index.css", cssIndex);

    const commonFolder = zip.folder("src/componant");

    commonFolder.file("button.jsx", button);

    zip.generateAsync({ type: "blob" }).then((content) => {
        downloadBlob(content, "my-react-app.zip");
    });
}