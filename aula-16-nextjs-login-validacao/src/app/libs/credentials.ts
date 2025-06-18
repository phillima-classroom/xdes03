'use server';

import { redirect } from "next/navigation";
import { LoginCredentials } from "../ui/login";
import ConexaoBD from "./conexao-bd";

import  bcrypt from 'bcrypt';
import { RedirectType } from "next/navigation";

const userDBFile = 'usuarios-db.json';

export async function validateCredentials(data: LoginCredentials){

    const email = data.email;
    const password = data.password;

    const usuariosDB = await ConexaoBD.retornaBD(userDBFile);

    const user = usuariosDB.find(user => user.email === email);

    if(!user)
        return {error: 'Usuário não encontrado'};
    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch)
    {
        redirect('/dashboard');
    }
    else{
        return {error: 'Usuario ou senhas incorretos'}
    }

}