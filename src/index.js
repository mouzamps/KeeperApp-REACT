import React from 'react';
import ReactDOM from 'react-dom';

const fname = "mouzam";
const lname = "ps";
const number = 10;
 ReactDOM.render(
   <div>
     <h1>Hi {fname} {lname}</h1>
     <p>my lucky number is {number}</p>
   </div>,
   document.getElementById('root')
 );