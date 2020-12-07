import React from 'react';
import ReactDOM from 'react-dom';

const username = "Mouzam";
const year = new Date().getFullYear()

ReactDOM.render(
  <div>
  <p className="para">Created by {username}</p>
  <p>Copyright {year}</p>
  <div>
    <img src= ></img>
  </div>
  </div>,
  document.getElementById('root')
);
