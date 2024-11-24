import Link from "next/link";

//Para ler arquivos com nextjs
import {promises as fs} from 'fs';
import path from "path";
import PokemonFav, { PokemonFavProps } from "@/components/pokemon";

import '@/styles/ListPokemon.css';

const dbPath = 
    path.join(process.cwd(),'src','db','pokemon-db.json');

export default async function Listar() {

    const file = await fs.readFile(`${dbPath}`,'utf8');
    const pokemonsDb = JSON.parse(file);

    const pokemonsMapped = 
            pokemonsDb.map((pokemon: PokemonFavProps) => {
                return <PokemonFav {...pokemon}/>
            })
    return(
        <div className="list-container">
            <Link href={'/main/create'} className="add-pokemon">Adicionar</Link>
            <div className="list-pokemon-container">
                {pokemonsMapped}
            </div>
        </div>
        
    );
}

