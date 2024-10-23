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
        retorno.data.abilities.forEach(habilidade => {
            console.log(habilidade.ability.name);
        });
    }catch(e)
    {
        console.log(`Pokemon ${argumentos[0]} não encontrado`);
    }

}

buscaPokemons();