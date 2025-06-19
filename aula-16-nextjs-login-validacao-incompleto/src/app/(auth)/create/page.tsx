'use client';

import Image from "next/image";
import userIcon from "public/user.png";
import passwordIcon from "public/padlock.png";
import pokeLogo from "public/pokemon-logo.png";

import '@/app/styles/login.css';
import {z} from "zod"; //import do zod para apoio nas validações do front: npm i zod 
import toast from 'react-hot-toast'; //import do react-hot-toast:  npm i react-hot-toast
import { createUser } from "@/app/libs/credentials";
import { LoginCredentials } from "../login/page";
import { redirect } from "next/navigation";


//Criação do schema para colocarmos as regras de validação do zod para os campos de createUser
//Retirado diretamente da documentação do "zod" em https://zod.dev/
const CreateUserSchema = z.object({
    email: z.string().trim().email('Email com formato incorreto'),
    password: z.string({message: 'Insira uma senha'}).trim().min(4, {message: 'Senha precisa no mínimo 4 caracteres'}),
    confPassword: z.string({message: 'Insira uma confirmação de senha'}).trim().min(1, {message: 'Confirmar Senha não pode ser vazia'}),
}).refine((data) => data.password === data.confPassword, {
    message: "Senhas não conferem",
    path: ["confPassword"]
});


export default function CreateUser(){

          

    return(
        
    )
}