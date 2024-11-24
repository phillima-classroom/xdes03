import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
}


const publicRoutes = [
    '/',
    '/user/login',
    '/user/create'
];

export function middleware(req: NextRequest){

    //Validar a session
    const session = null;
    if(!session){
        return NextResponse.redirect(new URL('/user/login', req.url));
    }



    return NextResponse.next();
}