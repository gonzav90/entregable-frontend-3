import { useState } from "react"


export default function Item(props) {

  const [stock, setStock] = useState(props.stock);

  
  return (
    <div className="producto">
      <h3>{props.producto.nombre}</h3>
      <p>{props.producto.descripcion}</p>
      <h5>
        En stock: <span>{stock}</span>
      </h5>
      <button>COMPRAR</button>
    </div>
  );
}
