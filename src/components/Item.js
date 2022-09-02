import { useState } from "react"


export default function Item(props) {

  const [stock, setStock] = useState(props.stock)

  const comprar=props.comprar

  
  return (
    <div className="producto">
      <h3>{props.producto.nombre}</h3>
      <p>{props.producto.descripcion}</p>
      <h5>
        En stock:  {(stock>0) ? stock : <span>Agotado</span>}
      </h5>
      <button onClick={ ()=>{comprar(setStock(stock - 1))}}  disabled={stock<=0}>{(stock>0) ? "COMPRAR" :"SIN STOCK"}</button>
    </div>
  )
}
