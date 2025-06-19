import { redirect } from "next/navigation";
import ConexaoBD from "./conexao-bd";

import bcrypt from 'bcrypt'; //Para criptografar a senha. npm i bcrypt
import { LoginCredentials } from "../(auth)/login/page";

const userDBFile = 'usuarios-db.json';

export async function createUser(data: LoginCredentials){

    
}

export async function validateCredentials(data: LoginCredentials){

    
}