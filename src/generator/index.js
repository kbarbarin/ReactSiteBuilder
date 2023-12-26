import JSZip from 'jszip';

export default function main() {
    const zip = new JSZip();

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
    zip.file("package.json", `{ "name": "my-react-app", "version": "1.0.0", "dependencies": { "react": "^17.0.2", "react-dom": "^17.0.2" } }`);
    zip.file("src/App.js", `import React from 'react'; function App() { return <div>Hello World</div>; } export default App;`);
    zip.file("src/index.js", `import React from 'react'; import ReactDOM from 'react-dom'; import App from './App'; ReactDOM.render(<App />, document.getElementById('root'));`);

    // Créer une structure de dossier
    const srcFolder = zip.folder("src");
    srcFolder.file("index.css", `body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; }`);

    zip.generateAsync({ type: "blob" }).then((content) => {
        downloadBlob(content, "my-react-app.zip");
    });
}