import Image from "next/image";
import Link from "next/link";

//Para ler arquivos com nextjs
import {promises as fs} from 'fs';
import path from "path";
import { redirect } from "next/navigation";

import '@/styles/Pokemon.css';

const dbPath = 
    path.join(process.cwd(),'src','db','pokemon-db.json');

export interface PokemonFavProps{
        id: string,    
        nome: string,
        img: string,
        descricao: string
}

export default async function PokemonFav(props: PokemonFavProps){

    const deletePokemon = async (formData: FormData) =>{
        'use server';

        const file = await fs.readFile(`${dbPath}`,'utf8');
        const data = JSON.parse(file);
    
        const id = props.id;

        const acharIndex = (p) => {
            return p.id === id
        }
    
        const index = data.findIndex(acharIndex);
        
        data.splice(index,1);
        await fs.writeFile(dbPath,JSON.stringify(data,null,2));

        redirect('/main/listar');

    }

    return(
        <div className="pokemon-container-card">
            <h3>{props.nome}</h3>
            <Image src={props.img}
                   alt=""
                   width={200}
                   height={200}
            />
            <p>{props.descricao}</p>
            <section className="pokemon-edit-buttons-container">
                <Link href={`/main/edit/${props.id}`} className="edit-pokemon">Editar</Link>
                <form action={deletePokemon}>
                    <button>Remover</button>
                </form>
            </section>
            
        </div>
    );
}