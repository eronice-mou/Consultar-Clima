import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
//import api from './services/api';

function App() {

  const [input, setInput] = useState('Belo Horizonte')  //entrada do usuário
  const [weatherForecast, setweatherForecast] = useState({})  //Previsão do tempo

  const handleSearch = (e) => {
    setInput(e.target.value)
  }

  const handlePesquisar = () => { //Faz a requisição
    fetch(
      `http://api.weatherstack.com/current.json?access_key=94d806276c342a904f4176a042207b7f&query=${input}&language=pt`)
    .then((response) => {
      if(response.status === 200){  //A requisição deu certo?
        return response.json()  // Se sim, então transforma em Json
      }
    })
    .then((data) => {
      console.log('data ====>', data)
    });
  };

  return (
    <div className="container">
      <h1 className="title">Previsão do Tempo</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Informe o local"
        value={input}
        onChange={handleSearch}>
        </input>

        <button className='buttonSearch' onClick={handlePesquisar}>
          <FiSearch sie={25} cpolor='#000'></FiSearch>
        </button>

      </div>

      <main className='main'>
        <span>Lugar: São Francisco</span>
        <span>País: Estados Unidos</span>
        <span>Região: Califórnia</span>
        <span>Clima: nublado</span>
        <span>Temperatura: 32º</span>


      </main>
    </div>

  );











  /*const [input, setInput] = useState('')

  async function handleSearch(){
    
    if(input===''){
      alert("Preencha os dados corretamente")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response)

    }catch{
      alert("Erro ao consultar");

    }
  }*/


  /*return (
    <div className="container">
      <h1 className="title">Consultar Clima</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Informe o local"
        value={input}
        onChange={(evento) => setInput(evento.target.value)}>

        </input>

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch sie={25} cpolor='#000'></FiSearch>
        </button>

      </div>

      <main className='main'>
        <span>Lugar: São Francisco</span>
        <span>País: Estados Unidos</span>
        <span>Região: Califórnia</span>
        <span>Clima: nublado</span>
        <span>Temperatura: 32º</span>


      </main>
    </div>

  );*/
}

export default App;

//Crie seu próprio sistema de previsão do tempo!
//Miguel Maia
//30:58 min
