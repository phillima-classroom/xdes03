import { redirect } from "next/navigation";
import * as bcrypt from 'bcrypt';
import crypto from 'crypto';
import ConexaoBD from "./conexao-bd";
import AuthTokenServices from "./auth-services";

const arquivo = 'usuarios-db.json';

async function createAccount(formData: FormData){   
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const passwordCrypt = await bcrypt.hash(password,10);
    
    const novoUser = {
        id: crypto.randomUUID(),
        email,
        password: passwordCrypt
    }

    //Manipula BD
    const usuariosBD = await ConexaoBD.retornaBD(arquivo);
    usuariosBD.push(novoUser);
    await ConexaoBD.armazenaBD(arquivo,usuariosBD);
    
    redirect('/user/login');
}

async function login(formData: FormData) {
    
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    //Manipula BD
    const usuariosBD = await ConexaoBD.retornaBD(arquivo);
    
    const user = usuariosBD.find(user => user.email === email);

    //optimisti update informar user

    if(!user)
    {
        console.log('user nao existe');
        redirect('/user/login');
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch)
    {
        await AuthTokenServices.createSessionToken({sub: user.id, email: user.email});
        redirect('/main/listar');
    }else{
        console.log('email ou senha invalido');
        redirect('/user/login');
    }
}

const Autenticacao = {
    createAccount,
    login
}

export default Autenticacao;