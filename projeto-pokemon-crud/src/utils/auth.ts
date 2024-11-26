import * as jose from 'jose'; //npm i jose. A lib é um wrapper do JWT. Também é necessário instala, npm i jsonwebtoken
import { cookies } from 'next/headers';

async function openSessionToken(token: string){
    const secret = new TextEncoder().encode(process.env.TOKEN);
    const {payload} = await jose.jwtVerify(token, secret);

    return payload;
}


async function createSessionToken(payload = {}){
    const secret = new TextEncoder().encode(process.env.TOKEN); 
    const session = await new jose.SignJWT(payload).setProtectedHeader({
        alg: 'HS256'
    })
    .setExpirationTime('1h')
    .sign(secret);

    const {exp} = await openSessionToken(session);

    //Seguindo a documentação do next, precisamos primeiro criar o cookieStore, pois é async
    const cookieStore = await cookies();
    
    //Através da cookieStore conseguimos buscar (get) e salvar (set) cookies no navegador.
    cookieStore.set('session', session, {
        expires: (exp as number) * 1000,
        path: '/',
        httpOnly: true
    });
}

async function isSessionValid(){
    const sessionCookie = (await cookies()).get('session');

    if(sessionCookie)
    {
        const {value} = sessionCookie;
        const {exp} = await openSessionToken(value);
        const currentDate = new Date().getTime();

        return ((exp as number) * 1000) > currentDate;
    }

    return false;
}

const AuthTokenServices = {
    openSessionToken,
    createSessionToken,
    isSessionValid
}

export default AuthTokenServices;