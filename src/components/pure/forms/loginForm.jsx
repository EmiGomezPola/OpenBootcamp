import React, {useState} from 'react';

const LoginForm = () => {

    const inicialCredentials = [
        { 
        user: '',
        password: '',
        }
    ];

    const [credentials, setCredentials] = useState(inicialCredentials);
     
   
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
