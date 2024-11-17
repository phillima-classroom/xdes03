import '@/app/page.css'

import pokeLogo from 'public/pokemon-logo.png';
import squirtle from 'public/squirtle.png';
import bulbasaur from 'public/bulbasaur.png';
import charmander from 'public/charmander.png';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <section className='section'>
          <Image className='img-logo' src={pokeLogo} alt='Logo do pokémon'/>
          <nav>
            <ul className='ul-right-side'>
              <li><a href="https://pokeapi.co/?ref=public-apis" target='_blank'>Poké API</a></li>
              <li><a href="https://www.pokemon.com/br" target='_blank'>Página Oficial</a></li>
            </ul>
          </nav>
        </section>
        <nav className='nav'>
          <ul className='ul-left-side'>
            <Link className="link" href="/create">Criar</Link>
            <Link className="link" href="/login">Login</Link>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Entre no Mundo Pokémon e Colecione Todos.<br/> Gotta Catch 'Em All</h1>
        <section className='footer-images'>
          <Image className='img-footer' src={bulbasaur} alt='O bulbasaur'/>
          <Image className='img-footer' src={charmander} alt='O charmander'/>
          <Image className='img-footer' src={squirtle} alt='O squirtle'/>
        </section>
      </main>
      <footer>
          <p>Feito com 🎮 por <a href="https://www.github.com/phillima" target='_blank'>philcisco</a></p>
      </footer>
    </>
  );
}
