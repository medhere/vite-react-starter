import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { defineCustomElements } from '../node_modules/@ionic/pwa-elements/loader';
import * as serviceWorkerRegistration from './libs/serviceWorkerRegistration';
import './index.css';
import '@ionic/react/css/core.css';
// import './ionic.css';

createRoot(document.getElementById('root')) .render( <App/> )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
defineCustomElements(window);
