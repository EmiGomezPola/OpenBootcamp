//Ejemplo de uso de : useState, useRef, useEffect

import { useRef, useState, useEffect } from "react";
import React from 'react';

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //Vamos a creas una referencia con useRef() para asociar una variable con un elemnto del Dom del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1)
    };

    function incrementar2(){
        setContador2(contador2 + 2)
    }

        //useEffect : Cada vez que haya un cambio  en el estado  del componente se ejecuta aquello que esta dentro del useEffect()
         {/*useEffect(() => {
            console.log('cambio en el estado del componente');
            console.log(miRef)
           
         })*/}

         useEffect(()=>{
            console.log('se cambia el 1')
            console.log(miRef)
         },[contador1])

    return (
        <div>
            <h1>
                Ejemplo2:   useState(), useRef(), useEffect()
            </h1>
            <h2>Contador1: {contador1}</h2>
            <h2>Contador2: {contador2}</h2>
          <h4 ref={miRef}>
          Ejemplo de elemnto referenciado
          </h4>
          <div>
            <button onClick={incrementar1}>Incrementar 1</button>
            <button onClick={incrementar2}>Incrementar 2</button>
          </div>
        </div>
       
    );
}

export default Ejemplo2;
