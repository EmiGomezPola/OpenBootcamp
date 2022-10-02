


import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/forms/componenteB';



const ContactoA = () => {

    const defaultContacto = new Contacto('Example', 'Default description','@mail', false,)

    {/*changeState = (id)=>{
        console.log('cambiar estado de una tarea')
    }*/}


    return (
        <div>
            <div>
                <h1>
                    Contacto:
                </h1>
            </div>
            <ContactoComponent contacto= { defaultContacto }/>
        </div>
    );
};


export default ContactoA;
