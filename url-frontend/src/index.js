import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1Kv9bl07enR8LQlnB2q3KS5RESpFGiCo",
  authDomain: "url-shortener-e04ba.firebaseapp.com",
  databaseURL: "https://url-shortener-e04ba-default-rtdb.firebaseio.com",
  projectId: "url-shortener-e04ba",
  storageBucket: "url-shortener-e04ba.appspot.com",
  messagingSenderId: "1092915001230",
  appId: "1:1092915001230:web:4a71e6bcd4ae7cff0a96df",
  measurementId: "G-74C6272FFJ"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();