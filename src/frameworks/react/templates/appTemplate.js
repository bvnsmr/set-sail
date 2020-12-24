module.exports = `import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-900 h-screen flex flex-col items-center justify-center text-white text-2xl">
        <img src={logo} className="pointer-events-none h-2/5 animate-spin" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
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
`;
