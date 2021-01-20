import logo from './ship.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for great coffee
         </a>
          <p>
          <b>Mission:</b> <code>aim for great usefulness ;)</code>
          </p>
        
      </header>
    </div>
  );
}

export default App;
