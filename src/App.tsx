import React, {useState} from "react";

import './App.css';
import {NewComponetnt} from "./NewComponetnt";
import {Buttons} from "./componetnts/Button/Button";
import {Subscriber} from "./componetnts/Subscriber/Subscriber";

function App() {

  const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}

  ]
// const button1Foo= (subscriber:string,age:number,address:string)=>{
// console.log(subscriber , age , address)
// }
//   const button2Foo= (subscriber:string)=>{
//     console.log(subscriber)
//   }
//   const button3Foo = (description:string)=>{
//     console.log(description)
//   }

//
// }

  let [a , setA]=useState(1);
  const buttonSubscribe = ()=>{
    setA(++a)
}
const buttonDelSubscribe = ()=>{
  setA(a=0)
}
  return (<div>
    <NewComponetnt  cars ={topCars}/>
    {/*<Buttons name={"Subscribe"} callBack={()=>button1Foo(`I'm Vasya`,21, `Live in Minsk`)}/>*/}
    {/*<Buttons name={"Unsubscribe"} callBack={()=>button2Foo(`I'm  Alex`)}/>*/}
    {/*<Buttons name={"Тупая кнопка"} callBack={()=>button3Foo(`Я тупая кнопка`)}/>*/}
    <Subscriber name={"subscribe"} callBack={buttonSubscribe} number={a} delName={"0"} callBackDel={buttonDelSubscribe}/>
  </div>);
}

export default App;
