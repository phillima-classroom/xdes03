import './App.css'
import Pokemon from './Pokemon'; //Importando o componente Pokemon
import axios from 'axios'; //A lib axios permite fazer requisições HTTP

export default function App() {
  
  const url = 'https://pokeapi.co/api/v2/pokemon/1';

  let nome = "";

  const buscaPokemon = async () => {
    const pokemon = await axios.get(url); //faz a requisição na API do Pokemon 
    const pokemonName = pokemon.data.name; //Extrair o nome do pokemon 

    //Essa atribuição não terá o resultado esperado no componente React
    nome = pokemonName;
    console.log(nome); //Veremos o console.log executando, mas não terá o efeito no componente
  }

  return (
   <>
    <Pokemon nome={nome} />
    <Pokemon nome={nome} />
    <Pokemon nome={nome} />
    <button onClick={buscaPokemon}>Clicar</button>
   </>
  )
}
