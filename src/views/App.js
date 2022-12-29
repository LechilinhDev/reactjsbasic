import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React Lechilinhdev
        </p>

        <Mycomponent />
      </header>
    </div>
  );
}

export default App;
