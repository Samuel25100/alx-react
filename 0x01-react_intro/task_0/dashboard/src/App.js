import logo from './logo.jpg';
import './App.css';

export default function App() {
  return (
    <body className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton"/>
        <h1>
          School dashboard
        </h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </body>
  );
}