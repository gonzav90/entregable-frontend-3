import { useState } from "react";
import Cabecera from "./components/Cabecera"
import Listado from "./components/Listado"

function App() {

  const [carrito, setCarrito] = useState(0)

  function comprarProducto(){

    setCarrito(carrito + 1)

  }
   

  return (
    <div className="App">
      <Cabecera carrito={carrito}/>
      <Listado comprar={comprarProducto}/>
    </div>
  );
}



export default App;
