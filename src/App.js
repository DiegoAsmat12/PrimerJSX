import './App.css';
import ListaTareas from './componentes/ListaTareas';
const App = ()=>{
  const cabecera = "Hello Dojo!";
  const listaDeTareas = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
  return (
    <div className="App">
      <header>
        <h1>{cabecera}</h1>
      </header>
      <ListaTareas lista={listaDeTareas}/>
      
    </div>
  );
}

export default App;
