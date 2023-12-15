# Mon Éditeur Web React

## Description

Mon Éditeur Web est une application React permettant aux utilisateurs de créer des pages web en utilisant une interface de glisser-déposer intuitive. Les utilisateurs peuvent sélectionner des composants dans une bibliothèque, les placer et les configurer sur une toile, puis exporter leur travail sous forme de projet React.

## Caractéristiques

- Interface de drag-and-drop pour construire des pages web.
- Bibliothèque de composants réutilisables.
- Personnalisation de composants avec redimensionnement et réarrangement.
- Exportation du projet en code React.
- Sauvegarde et chargement de projets.

## Installation

Pour installer et exécuter le projet localement, suivez ces étapes :

```bash
git clone [URL_DU_REPO]
cd mon-editeur-web
npm install
npm start
```
## Structure du projet

```bash
ReactSiteBuilder/
│
├── public/                    
│   └── index.html             
│
├── src/
│   ├── components/            
│   │   ├── common/            
│   │   ├── layout/            
│   │   └── editor/            
│   │
│   ├── hooks/                 
│   │
│   ├── utils/                 
│   │
│   ├── contexts/                
│   │
│   ├── styles/                
│   │
│   ├── App.js                 
│   │
│   └── index.js               
│
├── .env                       
├── package.json               
└── README.md                  
```