import React, { useRef } from 'react'

export const Child = ({name, send, update}) => {

    const messegeRef = useRef('');
    const nameRef= useRef('')

    function pressBotton(){
        const text= messegeRef.current.value;
        alert(`Text in Input: ${text}`);
    }

    function pressBottonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }
  return (
    <div style={{backgroundColor: 'cyan', padding: '30px'}}>
        <p onMouseOver={()=>console.log('con maouse')}>Hello, {name}</p>
        <button onClick={()=>console.log('boton1 pulsado')}>Boton 1</button>
        <button onClick={pressBotton}>Boton 2</button>

        <button onClick={()=>pressBottonParams('Hola')}>Boton 3</button>
        <input placeholder='insert a text' onFocus={()=>console.log('Input Focus')} onChange={(e)=> console.log('Input change',e.target.value)}  ref={messegeRef}/>

        <button onClick={()=> send(messegeRef.current.value)}>
            send Messege
        </button>
        <div style={{marginTop: '20px'}}>
            <form onSubmit={submitName}>
                <input  ref={nameRef} placeholder='completa tu nombre'/>
                <button type='submit'> update name</button>
            </form>
        </div>

    </div>
  )
}
