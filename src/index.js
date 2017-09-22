import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var movies = [

  {title: 'Mean Girls'},

  {title: 'Hackers'},

  {title: 'The Grey'},

  {title: 'Sunshine'},

  {title: 'Ex Machina'},

];

ReactDOM.render(
  <App films = {movies}/>,
  document.getElementById('root')
);
