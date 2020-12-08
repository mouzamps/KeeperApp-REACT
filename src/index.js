import React from 'react';
import ReactDOM from 'react-dom';

const username = "Mouzam";
const hour = new Date().getHours()
 let greeting;

 const customStyle = {
   color: ""
 }
 

 if(hour<12){
   greeting = "GoodMorning"
   customStyle.color = "red"

 }else if (hour<14){
   greeting = "GoodAfternoon"
 }else{
   greeting = "GoodNight"
   customStyle.color= "red"
 }

ReactDOM.render(
  <div>
  <p className="para">Created by {username}</p>
  <p>Copyright {hour}</p>
  <h1 style={customStyle}>{greeting}</h1>
  
  </div>,
  document.getElementById('root')
);
