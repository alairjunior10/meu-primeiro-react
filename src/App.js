import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

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
    </div>

  );
}

export default App;
