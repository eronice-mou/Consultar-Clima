import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <h1 className="title">Consultar Clima</h1>

      <div className="containerInput">
        <input type="text" placeholder="Informe o local"></input>

        <button>
          <FiSearch sie={25} cpolor='#000'></FiSearch>
        </button>

      </div>
    </div>

  );
}

export default App;
