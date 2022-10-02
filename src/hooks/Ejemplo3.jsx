// Ejemplo de Hook:
//useState(), useContext()

import React, {useContext, useState} from 'react'

const miContexto = React.createContext(null)

export const Componente1 = () => {
    const state = useContext(miContexto)
  return (
    <div>
        <h1>El Token es: {state.token}</h1>
        <Componente2/>
    </div>
  )
}

export const Componente2 = () => {

    const state = useContext(miContexto)
;  return (
    <div>
        <h2>La secion es: {state.sesion}</h2>
    </div>
  )
}


export default function MiComponenteConContexto(){
    const estadoInicial = {
        token:'1234567',
        sesion: 1
    }
    //estado de componente
    const [sessionData, setSessionData]= useState(estadoInicial);

    function actualizarSession(){
        setSessionData(
            {
                token: '1333444554',
                sesion: sessionData.sesion +1
            }
        )
    }
    return(
        <div>
            <miContexto.Provider value={sessionData}>
                <Componente1/>
                <button onClick={actualizarSession}>actualizar Session</button>
            </miContexto.Provider>
        </div>
    )
}