import React from 'react';
import ReactDOM from 'react-dom';

const username = "Mouzam";
const year = new Date().getFullYear()

ReactDOM.render(
  <div>
  <p>Created by {username}</p>
  <p>Copyright {year}</p>
  </div>,
  document.getElementById('root')
);