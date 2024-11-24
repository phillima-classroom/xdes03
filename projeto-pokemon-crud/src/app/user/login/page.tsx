import Link from "next/link";
import '@/styles/Login.css';
import Image from "next/image";

import userIcon from "public/user.png";
import passwordIcon from "public/padlock.png";
import pokeLogo from "public/pokemon-logo.png";
import Autenticacao from "@/utils/auth";

export default function Login(){
    return(
    <form className="login-form" action={Autenticacao.login}>
        <div>
            <Image className="form-image" src={pokeLogo} alt="pokémon logo" />
        </div>
        <div>
            <section className="user-input">
                <Image src={userIcon} alt="user icon"/>
                <input type="email" name="email" id="email" placeholder="Email" aria-label="Email"/>
            </section>

            <section className="user-input">
                <Image src={passwordIcon} alt="user icon"/>
                <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha"/>
            </section>
        </div>
               
        <button>Entrar</button>

        <Link id="link-cadastrar" href="/create">Não tem cadastro?</Link>
    </form>
    );
}