import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { register } from 'swiper/element/bundle';
register();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
