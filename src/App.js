import logo from './cockatoo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-size" alt="logo" />
        <p>
          Cockatoo - my faviorite animal or bird!
          Type of cockatoo made popular on the TV show "Baretta"
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
    </div>
  );
}

export default App;
