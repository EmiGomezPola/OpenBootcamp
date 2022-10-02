/* useState*/

import React, { useState }from 'react';

const Ejemplo1 = () => {
   
    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre : 'Emiliano',
        email: 'e@mail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //Funcion para actualizar el estado provado que contiene contador
    function incrementarContador(){
        setContador(contador + 1);
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Pepe',
                email: 'pepe@mail.com'
            }
        )
    }

    return(
        <div>
            <h1>
                Ejemplo de useState
            </h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={incrementarContador}>Invcrementar setContador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
        </div>
    )      
}


export default Ejemplo1;
