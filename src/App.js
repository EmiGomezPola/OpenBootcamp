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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       {/*<Greeting name={' Emi'}/>*/ } 
       {/*<GreetinfF name="Martin"/>*/}
       {/*<TaskListComponent/>*/}
       {/*<ContactoA/>*/}
       {/*<MiComponenteConContexto/>*/}
       <Ejemplo4 nombre=" Emiliano"/>
      </header>
    </div>
  );
}
export default App;
