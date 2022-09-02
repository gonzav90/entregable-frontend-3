import React from 'react'
import zapatillas from "./data.json"
import Item from "./Item"


export default function Listado() {
 
  return (
    
    <div className='container'>
     
     {zapatillas.map((z)=><Item {...z} />)}
      

    </div>
    
  )

}
