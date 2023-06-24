import React, {useState} from "react";
import {FilterType} from "../../App";


type MoneyType={
  banknote: string, nominal: number, number: string
}
type MoneyProps = {
  onclickFilterHandler:(name:FilterType)=>void;
money:MoneyType[]
}
export const Money= (props:MoneyProps)=>{

  return (<>
    <ul>{props.money.map((objFromMoneyArr,index)=>{
      return(
        <li key={index}>
          <span >{objFromMoneyArr.banknote}</span>
          <span >{objFromMoneyArr.nominal}</span>
          <span>{objFromMoneyArr.number}</span>
        </li>
      )
    })}</ul>
    <div style={{marginLeft:"35px"}}>
      <button onClick={()=>props.onclickFilterHandler("all")}>all</button>
      <button  onClick={()=>props.onclickFilterHandler("ruble")}>ruble</button>
      <button  onClick={()=>props.onclickFilterHandler("dollar")}>dollar</button>
    </div>
  </>)
}


