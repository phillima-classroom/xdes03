import Image from "next/image";
import "@/app/styles/pokemon-card.css";

export interface PokemonProps{
    id: string,
    nome: string,
    img: string,
    descricao: string,
}

export default function Pokemon(props: PokemonProps)
{

    return(
        <div className="pokemonCard">
            <h2>{props.nome}</h2>
            <img src={props.img} alt="Imagem de um pokémon"/>
            <p>{props.descricao}</p>
        </div>
    )

}