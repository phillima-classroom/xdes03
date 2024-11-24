import * as jose from 'jose';
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

    const cookieStore = await cookies();
    console.log(session, 'aaaaaaaaaaaaaaaa');
    cookieStore.set('session', session, {
        expires: (exp as number) * 1000,
        path: '/',
        httpOnly: true
    });
}

const AuthTokenServices = {
    openSessionToken,
    createSessionToken
}

export default AuthTokenServices;