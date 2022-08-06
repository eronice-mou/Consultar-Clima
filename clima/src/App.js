import {useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

function App() {

  const [input, setInput] = useState("")  //entrada do usuário
  const [weatherForecast, setWeatherForecast] = useState(null);  //Previsão do tempo

  const handleSearch = (e) => { //Pega o valor do input
    setInput(e.target.value)
  }

  const handlePesquisar = () => {
    fetch(  //Faz a requisição
      `http://api.weatherstack.com/current?access_key=94d806276c342a904f4176a042207b7f&query=${input}`)
    .then((response) => {
      if(response.status === 200){  //A requisição deu certo?
        return response.json()  // Se sim, então transforma em Json
      }
    })
    .then((data) => { //Previsão do tempo
      console.log('data ====>', data)
      setWeatherForecast(data)
      console.log(weatherForecast)
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
          <FiSearch sie={25} color='#000'></FiSearch>
        </button>

      </div>

      {
          weatherForecast ? (

            <div>
              <div className="mt-4">

                <main className='main'>
                  <span>Lugar: {weatherForecast.location.name}</span>
                  <span>País: {weatherForecast.location.country}</span>
                  <span>Região: {weatherForecast.location.region}</span>
                  <span>Clima: {weatherForecast.current.weather_descriptions}</span>
                  <span>Temperatura: {weatherForecast.current.temperature}º</span>

                </main>

                <div className='imagem-clima'>
                  <img src={weatherForecast.current.weather_icons}></img>
                </div>

              </div>
            </div>
          ) : null
        }
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
