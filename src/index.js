import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'

const API_KEY = "AIzaSyCArZRD9HQVWnA6Dp71cej6TfdqthARgn8";
const PROJECT_ID = "kcalcalc-ce30b";


const config = {
    apiKey: `${API_KEY}`,
    authDomain: `${PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
    projectId: `${PROJECT_ID}`,
    storageBucket: `${PROJECT_ID}.appspot.com`
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
