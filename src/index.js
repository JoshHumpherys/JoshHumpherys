import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import * as firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker'

const config = {
  apiKey: "AIzaSyAsECFets6nZbJA8xgNWs-vza1-MmEzAUc",
  authDomain: "joshhumpheryswebsite.firebaseapp.com",
  databaseURL: "https://joshhumpheryswebsite.firebaseio.com",
  projectId: "joshhumpheryswebsite",
  storageBucket: "",
  messagingSenderId: "331718848962"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
