import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home'
import Header from './components/header'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);