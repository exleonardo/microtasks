import React, {useState} from "react";

import './App.css';
import {NewComponetnt} from "./NewComponetnt";
import {Buttons} from "./componetnts/Button/Button";
import {Subscriber} from "./componetnts/Subscriber/Subscriber";
import {Money} from "./componetnts/Money/Money";


export type FilterType = "all"|"ruble"|"dollar"
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

    const [money, setMoney] = useState([
      {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
      {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
      {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
      {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
      {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
      {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
      {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
      {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ]);
    let currentMoney = money;
    const [filter ,setFilter ]=useState<FilterType>("all");
    if(filter==="ruble"){
      currentMoney = money.filter((filterdMoney)=>filterdMoney.banknote==="ruble")
    }
    if(filter==="dollar" ){
      currentMoney= money.filter((filterdMoney)=>filterdMoney.banknote==="dollar");
    }
    const onclickFilterHandler=(name:FilterType)=>{
      setFilter(name)
    }
//
// }
//   let [a , setA]=useState(1);
//   const buttonSubscribe = ()=>{
//     setA(++a)
// }
// const buttonDelSubscribe = ()=>{
//   setA(a=0)
// }
  return (<div>
    <NewComponetnt  cars ={topCars}/>
    {/*<Buttons name={"Subscribe"} callBack={()=>button1Foo(`I'm Vasya`,21, `Live in Minsk`)}/>*/}
    {/*<Buttons name={"Unsubscribe"} callBack={()=>button2Foo(`I'm  Alex`)}/>*/}
    {/*<Buttons name={"Тупая кнопка"} callBack={()=>button3Foo(`Я тупая кнопка`)}/>*/}
    {/*<Subscriber name={"subscribe"} callBack={buttonSubscribe} number={a} delName={"0"} callBackDel={buttonDelSubscribe}/>*/}
    <Money onclickFilterHandler={onclickFilterHandler} money={currentMoney} />
  </div>);
}
export default App;
