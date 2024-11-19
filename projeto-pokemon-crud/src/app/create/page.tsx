import Image from "next/image";

import userIcon from "public/user.png";
import passwordIcon from "public/padlock.png";
import pokeLogo from "public/pokemon-logo.png";

import '@/styles/Login.css';

export default function Create() {
  return(
    <form className="login-form">
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

            <section className="user-input">
                <Image src={passwordIcon} alt="user icon"/>
                <input type="password" name="conf-password" id="conf-password" placeholder="Confirmar Senha" aria-label="Confirmar Senha"/>
            </section>
        </div>
               
        <button>Cadastrar</button>

    </form>
  );
}