import Link from "next/link";

import '@/styles/CreatePokemon.css';

//Para ler arquivos com nextjs
import {promises as fs} from 'fs';
import path from "path";
import { redirect } from "next/navigation";

import crypto from 'crypto';

const dbPath = 
    path.join(process.cwd(),'src','db','pokemon-db.json');

//Marcar o componente como async para "server component"
export default async function CreatePokemon(){

    const file = await fs.readFile(`${dbPath}`,'utf8');
    const data = JSON.parse(file);

    //Server Action. Só irá executar no servidor
    const addPokemon = async (formData: FormData) => {
        "use server";
        data.push(
            {
                id: crypto.randomUUID(),
                nome : formData.get("nome"),
                descricao : formData.get("descricao"),
                img : formData.get("img")
            }
        )
        await fs.writeFile(dbPath,JSON.stringify(data,null,2));
        redirect('/main/listar');
    }

    return(
        <div className="create-pokemon-container">
            <h3>
                Inserir Novo Pokémon
            </h3> 
            <form action={addPokemon} className="create-pokemon-form">
                <section className="pokemon-input">
                    <input type="text"
                        id="nome"
                        name="nome" 
                        placeholder="Nome do Pokémon"
                        aria-label="Nome do Pokémon"
                        />
                </section>

                <section className="pokemon-input">
                    <input type="text"
                        id="descricao"
                        name="descricao" 
                        placeholder="Descrição do Pokémon"
                        aria-label="Descrição do pokémon"
                        />
                </section>

                <section className="pokemon-input">
                    <input type="text"
                        id="img"
                        name="img" 
                        placeholder="Link com Imagem do Pokémon"
                        aria-label="Link com Imagem do pokémon"
                            />
                </section>

                               

                <button>Adicionar Pokémon</button>
            </form>
            
        </div>
       

    );

}