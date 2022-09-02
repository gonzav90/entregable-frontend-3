import React from 'react'
import zapatillas from "./data.json"
import Item from "./Item"


export default function Listado(props) {
 
  return (
    
    <div className='container'>
     
     {zapatillas.map((z)=><Item {...z} comprar={props.comprar}/>)}
      
    </div>
    
  )

}
