/**
* @Purpose : Rendering a client-facing instagram application 
* @database : connecting to our database of firebase 
* @dependencies : react-loading skeleton 
* @styling : tailwind css
* @architecture : components, constants, context, helpers, lib (for firebase), services (firebase functions)  
* * */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
