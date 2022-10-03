import React, { useState } from 'react';

const loggedStyle = {
    color: 'blue'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bord'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);

    const greetingUser = ()=>(<p>Hola, {props.name}</p>);
    const pleaseLoging = ()=>(<p>Please Loging</p>);
    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
        {logged ?
         greetingUser()
         : 
         pleaseLoging()
         }
            <button onClick={()=>{
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logour': 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingStyled;
