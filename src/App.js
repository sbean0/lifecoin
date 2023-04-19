import logo from './ship.svg';
import './App.css';
import BlogPage from "./BlogPage";


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
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
          
          <h3>Mission:</h3> 
          <p><code>aim for great usefulness!</code>
          </p>
        
      </header>
    </div>
    </Route>
        <Route exact path="/blog">
          <BlogPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
