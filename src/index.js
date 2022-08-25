/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import wrongWay from './assets/images/background/wrong-way.gif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="*"
        element={(
          <main style={{
            backgroundColor: '#F0F2F3',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
          }}
          >
            <img
              style={{
                width: '90%',
                maxWidth: '600px'
              }}
              src={wrongWay}
              alt="Error 404. Not found"
            />
          </main>
        )}
      />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
