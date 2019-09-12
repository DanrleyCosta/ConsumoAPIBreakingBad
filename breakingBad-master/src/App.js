import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Frase = ({ frase }) =>
  (
    <div className="frase">
      <h1>
        {frase.quote}
      </h1>
      <p>{frase.author}</p>
    </div>
  )

const App = () => {

  const [frase, setFrase] = useState({});


  const consulta = async () => {

    const resultado = await axios('http://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //console.log(resultado.data[0]);

    setFrase(resultado.data[0]);
  }

  /* const fet = () => {
    fetch(`data.json`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((data) => {
        return data.json();
      })
      .then(res => console.log(res))
  } */
  //consulta a rest api
  useEffect(
    () => {
      consulta();
      //fet();
    }, []

  )

  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />
      <button
        onClick={consulta}
      >Generar Nueva Frase</button>
    </div>
  )
}

export default App;