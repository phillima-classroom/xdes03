import squirtle from 'public/squirtle.png';
import bulbasaur from 'public/bulbasaur.png';
import charmander from 'public/charmander.png';
import Image from 'next/image';

import "@/styles/Footer.css";
export default function Footer(){
    return(
        <section className='footer'>
            <section className='footer-images'>
                <Image className='img-footer' src={bulbasaur} alt='O bulbasaur'/>
                <Image className='img-footer' src={charmander} alt='O charmander'/>
                <Image className='img-footer' src={squirtle} alt='O squirtle'/>
            </section>
            <footer>
                <p style={{textAlign: "center"}}>Feito com 🎮 por <a href="https://www.github.com/phillima" target='_blank'>philcisco</a></p>
            </footer>
        </section>
    );
}