import React from 'react';

import './App.css';
import {NewComponetnt} from "./NewComponetnt";

function App() {

  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}

  ]

  return (<div>
    <NewComponetnt  cars ={topCars}/>
  </div>);
}

export default App;
