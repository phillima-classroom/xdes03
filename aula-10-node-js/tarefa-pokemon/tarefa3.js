const axios = require('axios');

const argumentos = process.argv.splice(2);
const idPokemon = `/${argumentos[0]}`;

const api = 'https://pokeapi.co/api/v2';
const endpoint = '/evolution-chain';

const buscaPokemons = async () => {
    const url = `${api}${endpoint}${idPokemon}`;
    console.log(url);
    try{
        const retorno = await axios.get(url);
        const cadeiaEvolucao = retorno.data.chain;

        let evolvesto = cadeiaEvolucao.evolves_to;
        let pokemonbase = cadeiaEvolucao.species.name;
  
        while(evolvesto.length !== 0)
        {
            console.log(`${pokemonbase} -> ${evolvesto[0].species.name}`);
            pokemonbase = evolvesto[0].species.name;
            evolvesto = evolvesto[0].evolves_to;
        }

    
    }catch(e)
    {
        console.log(`Pokemon ${argumentos[0]} não encontrado`);
    }

}

buscaPokemons();