
type SubscriberType= {
  name:string;
  callBack:()=>void;
  number:number;
  delName:string;
  callBackDel:()=>void

}
export const Subscriber= (props:SubscriberType)=>{

  const onClickHandler =()=>{
props.callBack();
  }
  const onClickDelHandler =()=>{
    props.callBackDel()
  }
  return (
    <><h1>{props.number}</h1>
      <button onClick={onClickHandler}>{props.name}</button>
      <button onClick={onClickDelHandler}>{props.delName}</button>
    </>
  )
}