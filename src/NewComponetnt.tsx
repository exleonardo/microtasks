
type NewComponetntType = {
  cars : CarType[]
}

type CarType = {
  manufacturer:string
  model:string
}
export const NewComponetnt = (props:NewComponetntType)=>{
  const cars = props.cars.map((nameCar,index)=>{
    return(<table key={index+6} >
      <tbody key={index+5} >
      <tr key={index+4} >
        <td key ={index+1}>{index+1}</td>
        <td key ={index+2}>{nameCar.manufacturer}</td>
        <td key ={index+3}>{nameCar.model}</td>
      </tr>
      </tbody>
    </table>)
  })
  return (
    <div>{cars}</div>
  )
}