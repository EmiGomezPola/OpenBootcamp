import React from 'react'

export const Ejemplo4 = (props) => {
  return (
    <>
          <div>Ejemplo4</div>
    <h2>
        nombre:{props.nombre}
    </h2>
    {props.children}
    </>
  
  )
}
