import Link from "next/link";
import '@/styles/Login.css';
export default function Login(){
    return(
    <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email"/>

        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Senha"/>

        <button>Entrar</button>

        <Link href="/create">Não tem cadastro?</Link>
    </form>
    );
}