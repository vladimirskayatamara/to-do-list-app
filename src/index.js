import React from 'react'; // ВСЕГДА импортируем реакт в любой компонент
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //div #root - единственный элемент, внутрнь которого кладется всё приложение. оно запускается целиком из данного файлика, index.js
// ReactDOM - обращение к библиотеке
// render - вызов метода
// <App/> - название комонента для рендеринга
//document.getElementById('root') - куда складывем приложение
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
