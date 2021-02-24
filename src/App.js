import logo from './logo.svg';
import { Button, Intent } from "@blueprintjs/core";
import './App.scss';

function App() {
  return (
    <div className="App">
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
        <Button intent={Intent.PRIMARY}>Button</Button>
        <Button intent={Intent.DEFAULT}>Button</Button>
      </header>
    </div>
  );
}

export default App;
