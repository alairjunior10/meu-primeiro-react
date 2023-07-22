import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const nome = "Talitha";
  return (
    /*
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    */

      
    <div className="App"> 
      <Form/> 
      <Evento numero={1}/>
      <Evento numero={2}/>
      <HelloWord/>
      <SayMyName nome="Alair Junior"/>
      <SayMyName nome="Miguel"/>
      <SayMyName nome= {nome}/>
      <Pessoa 
        nome ="Alair"
        idade = "28"
        profissao = "Desenvolvedor"
        foto = "https://via.placeholder.com/150"
      />
      
      <List/>
    </div>

  );
}

export default App;
