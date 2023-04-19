import logo from './ship.svg';
import './App.css';
import BlogPage from "./BlogPage";
import Navigation from "./Navigation";

function App() {
  return (

    <div className="App">
      <header className="App-header">
      <Navigation />
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React for great coffee
         </a>
          
          <h3>Mission:</h3> 
          <p><code>aim for great usefulness!</code>
          </p>
        
      </header>
    </div>

  );
}

export default App;
