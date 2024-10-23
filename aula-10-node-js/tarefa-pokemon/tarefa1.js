const axios = require('axios');

const argumentos = process.argv.splice(2);
const idPokemon = `/${argumentos[0]}`;

const api = 'https://pokeapi.co/api/v2';
const endpoint = '/pokemon';

const buscaPokemons = async () => {
    const url = `${api}${endpoint}${idPokemon}`;
    console.log(url);
    try{
        const retorno = await axios.get(url);
        console.dir(`Pokemon com id ${argumentos[0]}: ${retorno.data.name}`);

    }catch(e)
    {
        console.log(`Pokemon com id ${argumentos[0]} não encontrado`);
    }

}

buscaPokemons();