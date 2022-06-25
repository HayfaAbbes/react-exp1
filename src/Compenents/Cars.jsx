import React from 'react'
import Button  from 'react-bootstrap'
const Cars = ({Kreheb, chaine,handlePrice}) => {
    console.log(Kreheb)

  return (
    <div>
        {
            Kreheb.map((el) =>(
               <div>
                <h1>{el.id}</h1>
                <h1>{el.brand}</h1>
                <button onClick = {()=>handlePrice(el.brand,el.price)}>Show price</button>
               </div>
            ))
        } 
         </div>
  )
}

export default Cars;