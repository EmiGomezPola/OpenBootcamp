import React, { useState } from 'react'
import { Child } from '../pure/forms/child'


export const Father = () => {
    const [name, setName] = useState('Emiliano');
    
    function showMessage(text){
            alert(`Messege receive: ${text}`)
    }

    function updateName(newName){
        setName(newName)
    }
  return (
    <div style={{backgroundColor: 'tomato', padding: '10px'}}>
        <Child  name={name} send={showMessage} update={updateName}/>
    </div>
  )
}
