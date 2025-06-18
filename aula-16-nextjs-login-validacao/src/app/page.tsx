import Image from "next/image";
import "@/app/page.css";
import Pokemon, { PokemonProps } from "./ui/pokemon-card";
import Link from "next/link";
import LoginForm from "./ui/login";


const dados: PokemonProps = {
  nome : '',
  descricao: '',
  img : '',
  id: '' 
}

export default function Home() {
  return (
    <main>
        <h1>Bem vindo ao Mundo Pokémon</h1>
        <LoginForm />
    </main>
  );
}
