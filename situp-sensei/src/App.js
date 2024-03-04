import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
          Sit-Up Sensei
        </h1>
        <p className="PrimaryButton">
          CREATE ACCOUNT
        </p>
        <p className="SecondaryButton">
          LOG IN
        </p>
      </header>
    </div>
  );
}

export default App;
