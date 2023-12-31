import JSZip from 'jszip';

import { index, manifest } from './templates/publicFolder';
import { packages } from './templates/package';
import { App, jsIndex, cssIndex } from './templates/src';
import { button, buttonCss, card, cardCss, inputField, inputFieldCss, modal, modalCss, progressBar, progressBarCss, slider, sliderCss } from './templates/common';

export default function main(itemList) {
    var appContain = "<div>Hello World</div>";
    var importContain = '';
    const zip = new JSZip();

    function generateApp() {
        if (itemList) {
            appContain = '(\n<div>\n';
            itemList.forEach(element => {
                // Check if Button
                if (element.type === 'Button') {
                    appContain += `<Button>${element.props?.children?.props?.children}</Button>\n`;
                    const isSubstring = importContain.includes('import Button from \'./components/Button/Button\'\n');
                    if (!isSubstring) {
                        importContain += 'import Button from \'./components/Button/Button\'\n'
                    }
                }
                // Check if Card
                if (element.type === 'Card') {
                    appContain += `<Card>${element.props?.children?.props?.children}</Card>\n`;
                    const isSubstring = importContain.includes('import Card from \'./components/Card/Card\'\n');
                    if (!isSubstring) {
                        importContain += 'import Card from \'./components/Card/Card\'\n'
                    }
                }
                // Check if InputField
                if (element.type === 'InputField') {
                    appContain += `<InputField placeholder="${element.props.placeholder}"/>\n`;
                    const isSubstring = importContain.includes('import InputField from \'./components/InputField/InputField\'\n');
                    if (!isSubstring) {
                        importContain += 'import InputField from \'./components/InputField/InputField\'\n'
                    }
                }
                // Check if Modal
                if (element.type === 'Modal') {
                    appContain += `<Modal title="${element.props.title}">${element.props?.children?.props?.children}</Modal>\n`;
                    const isSubstring = importContain.includes('import Modal from \'./components/Modal/Modal\'\n');
                    if (!isSubstring) {
                        importContain += 'import Modal from \'./components/Modal/Modal\'\n'
                    }
                }
                // Check if ProgressBar
                if (element.type === 'ProgressBar') {
                    appContain += `<ProgressBar percentage="${element.props.percentage}" duration="${element.props.duration}" showText="${element.props.showText}" />\n`;
                    const isSubstring = importContain.includes('import ProgressBar from \'./components/ProgressBar/ProgressBar\'\n');
                    if (!isSubstring) {
                        importContain += 'import ProgressBar from \'./components/ProgressBar/ProgressBar\'\n'
                    }
                }
                // Check if Slider
                if (element.type === 'Slider') {
                    appContain += `<Slider min="${element.props.min}" max="${element.props.max}" step="${element.props.step}" defaultValue="${element.props.defaultValue}" onChange={${element.props.onChange}} label="${element.props.label}">${element.props.value}</Slider>\n`;
                    const isSubstring = importContain.includes('import Slider from \'./components/Slider/Slider\'\n');
                    if (!isSubstring) {
                        importContain += 'import Slider from \'./components/Slider/Slider\'\n'
                    }
                }

            });
            appContain += '</div>\n)';
        }
    }

    generateApp();

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

    srcFolder.file("App.js", App(appContain, importContain));
    srcFolder.file("index.js", jsIndex);

    const styleFolder = zip.folder("src/style");

    styleFolder.file("index.css", cssIndex);

    zip.folder("src/components");
    const buttonFolder = zip.folder("src/components/Button");

    buttonFolder.file("Button.jsx", button);
    buttonFolder.file("Button.css", buttonCss)

    const CardFolder = zip.folder("src/components/Card");

    CardFolder.file("Card.jsx", card);
    CardFolder.file("Card.css", cardCss);

    const InputFieldFolder = zip.folder("src/components/InputField");

    InputFieldFolder.file("InputField.jsx", inputField);
    InputFieldFolder.file("InputField.css", inputFieldCss);

    const ModalFolder = zip.folder("src/components/Modal");

   ModalFolder.file("Modal.jsx", modal);
   ModalFolder.file("Modal.css", modalCss);

   const ProgressBarFolder = zip.folder("src/components/ProgressBar");

   ProgressBarFolder.file("ProgressBar.jsx", progressBar);
   ProgressBarFolder.file("ProgressBar.css", progressBarCss);

   const SliderFolder = zip.folder("src/components/Slider");

   SliderFolder.file("Slider.jsx", slider);
   SliderFolder.file("Slider.css", sliderCss);

    zip.generateAsync({ type: "blob" }).then((content) => {
        downloadBlob(content, "my-react-app.zip");
    });
}