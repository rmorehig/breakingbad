import React,{useState,useEffect} from 'react';
import axios from 'axios'

function App() {
  const [frase,obtenerfrase] = useState({}); 
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // agregar el resultado de la API al state (similar a this.setState)
    obtenerfrase(resultado.data[0])
  } 
  //consulta rest api
  useEffect(
    () => {
      consultarAPI()
    }, []
  )

  console.log(frase) //frase = this.state
  return (
    <p>{frase.quote}</p>
  );
}

export default App;
