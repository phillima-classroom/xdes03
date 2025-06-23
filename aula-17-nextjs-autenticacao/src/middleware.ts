import { isSessionValid } from "@/app/libs/session";
import {NextRequest, NextResponse} from "next/server";



//regex retirada diretamente da documentação do NextJS
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

const publicRoutes = [
    '/',
    '/login',
    '/create'
]

export async function middleware(req: NextRequest){

    const pathname = req.nextUrl.pathname;

    if(publicRoutes.includes(pathname))
    {
        return NextResponse.next();
    }

    //verificar se a requisicao possui credenciais validas para criar uma session
    console.log(req);
    const session = await isSessionValid();

    if(!session){
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();

}