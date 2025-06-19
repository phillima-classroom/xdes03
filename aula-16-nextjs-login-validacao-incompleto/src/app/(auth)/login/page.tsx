'use client'

import '@/app/styles/login.css';
import Image from 'next/image';


import pokemonLogo from 'public/pokemon-logo.png';
import userIcon from 'public/user.png';
import passwordIcon from 'public/padlock.png';
import z from 'zod';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { validateCredentials } from '@/app/libs/credentials';


export interface LoginCredentials {
    email: string,
    password: string
}

const LoginSchema = z.object({
    email: z.string().trim().email('Email com formato incorreto'),
    password: z.string({message: 'Insira uma senha'}).trim().min(2, {message: 'Senha requer no mínimo 2 caracteres'})
})

export default function LoginPage(){

    
    return (
        
    )
}