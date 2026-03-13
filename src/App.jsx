import React, { useEffect, useState } from "react";
import "./App.css";
import Popup from "./Components/Popup/Popup";

function App() {

  const [climas, setClimas] = useState([]); // comentario: estado para armazenar os dados do clima das cidades

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Florianópolis", "Taubate", "Belo Horizonte", "Porto Alegre", "Recife", "Fortaleza", "Ubatuba"];

  useEffect(() => {

    async function buscarClima() {

      const resultados = await Promise.all(

        cidades.map(async (cidade) => {

          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`
          );

          const data = await response.json();

          return {
            cidade: cidade,
            temperatura: data.main.temp,
            descricao: data.weather[0].description,
            icone: data.weather[0].icon
          };

        })
      );

      setClimas(resultados);
    }

    buscarClima();

  }, []);

  return (
  <div className="container">

    <h1>Clima das Cidades</h1>

    {climas.length > 0 ? (
      <Popup
        message="Sucessoooo!!!"
        duration={3000}
        onClose={() => console.log("Fechou")}
      />
    ) : null}

    <div className="grid">

      {climas.map((clima, index) => (
        <div className="card" key={index}>

          <h2>{clima.cidade}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${clima.icone}@2x.png`}
            alt="icone"
          />

          <p className="temp">{clima.temperatura}°C</p>

          <p className="desc">{clima.descricao}</p>

        </div>
      ))}

    </div>

  </div>
);
}

export default App;