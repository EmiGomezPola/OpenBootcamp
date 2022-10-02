import React,{useState} from 'react';
import PropTypes from 'prop-types';


const GreetinfF = (props) => {

    const [age, setAge] = useState(29);

    const birthday = ()=>{
        setAge(age +1);
    }
    return (
        <div>
            <div>
                <h1>
                    Hola{props.name}!
                </h1>
                <h2>
                    Tu edad es: {age}
                </h2>
                <div>
                    <button onClick={ birthday }>
                        cumplir años
                    </button>
                </div>
            </div>
        </div>
    );
};


GreetinfF.propTypes = {
    name: PropTypes.string
};


export default GreetinfF;
