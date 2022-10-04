import React, { useState, useEffect } from 'react';
import contactComponent9 from './components9/contactComponent9';
import contactForm9 from './components9/contactForm9'
import './AppContact.css';
import ContactForm9 from './components9/contactFomr9';
import ContactComponent9 from './components9/contactComponent9';
const AppContact = () => {
  const defaultContact = [
    { nombre: 'Pau', email: 'Gomez', conectado: true },
    { nombre: 'Lau', email: 'Betti', conectado: true },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <h1>Contactos</h1>

      <div className="card-container">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent9 key={index} contacto={contacto} changeState={changeState} remove={remove} />
          );
        })}
      </div>

      <ContactForm9 onAddContact={addContact}></ContactForm9>
    </div>
  );
};

export default AppContact;