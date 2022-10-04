import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetinfF from './components/pure/greetingF';
import TaskListComponent from './components/container/task.list';


import ContactoA from './components/container/contactoA';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo3 from './hooks/Ejemplo3';
import MiComponenteConContexto from './hooks/Ejemplo3';
import { Ejemplo4 } from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './Ejercicios/Ejercicio6/clock';
import { Father } from './components/container/father';
import AppContact from './Ejercicios/Ejercicio9/AppContact';

function App() {
  return (
    <div className="App">
   
       
       {/*<Greeting name={' Emi'}/>*/ } 
       {/*<GreetinfF name="Martin"/>*/}
       {/*<ContactoA/>*/}
       {/*<MiComponenteConContexto/>*/}
       {/* <Ejemplo4 nombre=" Emiliano"/>*/}
       {/*<GreetingStyled name= 'Emi'/>*/}
       {/*<Clock/>*/}
       <AppContact/>

      {/*<TaskListComponent/>*/}

      {/*<Father/>*/}
    </div>
  );
}
export default App;
