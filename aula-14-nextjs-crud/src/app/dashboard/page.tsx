import ConexaoBD from "../libs/conexao-bd";
import Pokemon from "../ui/pokemon-card";
import "@/app/styles/dashboard.css";

const bd : string = 'pokemon-db.json';

export default async function DisplayPokemons(){


    const dados = await ConexaoBD.retornaBD(bd);
    const pokemons = dados.map((pokemon) => {
        return <Pokemon {...pokemon} key={pokemon.id}/>
    });

    return(
        <div className="cardContainer">
            {pokemons}
        </div>
        
    )

}