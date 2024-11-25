import { NextRequest, NextResponse } from "next/server";
import AuthTokenServices from "./utils/auth-services";

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
}


const publicRoutes = [
    '/',
    '/user/login',
    '/user/create'
];

export async function middleware(req: NextRequest){

    const pathname = req.nextUrl.pathname;

    if(publicRoutes.includes(pathname))
    {
        return NextResponse.next();
    }

    //validar a session
    const session = await AuthTokenServices.isSessionValid();
    if(!session){
        return NextResponse.redirect(new URL('/user/login', req.url));
    }
    return NextResponse.next();
}