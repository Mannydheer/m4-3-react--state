import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import App from './components/App';

const rootElement = document.getElementById('root');

ReactDOM.render(<App data ={data.books}/>, rootElement);
