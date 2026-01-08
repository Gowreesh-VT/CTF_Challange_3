import { NextResponse } from 'next/server'

export function middleware(request) {

  if (request.nextUrl.pathname === '/api/hacker') {
    

    const authHeader = request.headers.get('x-vvortex-auth')

    if (authHeader === 'middleware') {
      console.log('[MIDDLEWARE] ✅ Access granted - header validated')
      return NextResponse.next()
    }
    
    console.log('[MIDDLEWARE] ❌ Access denied - invalid or missing header')
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 401 }
    )
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
