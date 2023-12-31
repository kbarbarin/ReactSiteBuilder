const App = (appContain, importContain) => { 
    return(`import React from 'react';
${importContain}
import './style/index.css'

function App() {
     return ${appContain};
} 

export default App;`)
}

const jsIndex = `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);`

const cssIndex = `* {
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}
`

export {App, jsIndex, cssIndex}