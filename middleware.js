import { NextResponse } from 'next/server'

/**
 * DELIBERATELY VULNERABLE MIDDLEWARE
 * 
 * CVE-2025-29927 Inspired: Middleware Authentication Bypass
 * 
 * VULNERABILITY: This middleware trusts a client-controllable HTTP header
 * to grant access to protected resources. An attacker can simply send the
 * expected header value to bypass authentication entirely.
 * 
 * HOW IT WORKS:
 * - All requests to /api/hacker are intercepted by this middleware
 * - The middleware checks for the "x-middleware-subrequest" header
 * - If the header value is "middleware", access is granted
 * - If not, a 401 Unauthorized response is returned
 * 
 * WHY THIS IS VULNERABLE:
 * - The middleware assumes only internal/trusted requests have this header
 * - In reality, ANY client (curl, browser, etc.) can set this header
 * - There is NO cryptographic verification or secret validation
 * - This represents a complete authentication bypass
 * 
 * REAL-WORLD CONTEXT:
 * This mirrors CVE-2025-29927 where Next.js middleware trusted internal
 * headers that could be spoofed by attackers, leading to authentication
 * bypass vulnerabilities in production applications.
 */

export function middleware(request) {
  // Only apply middleware to /api/hacker endpoint
  if (request.nextUrl.pathname === '/api/hacker') {
    
    // VULNERABILITY: Trusting a client-controllable header for authentication
    const subrequestHeader = request.headers.get('x-middleware-subrequest')
    
    // Check if the header matches the expected "secret" value
    if (subrequestHeader === 'middleware') {
      // BYPASS SUCCESSFUL: Allow request to proceed to the API handler
      console.log('[MIDDLEWARE] ✅ Access granted - header validated')
      return NextResponse.next()
    }
    
    // BLOCKED: Return 401 if header is missing or incorrect
    console.log('[MIDDLEWARE] ❌ Access denied - invalid or missing header')
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 401 }
    )
  }
  
  // Allow all other requests to pass through
  return NextResponse.next()
}

/**
 * Configure which routes this middleware applies to
 * Only intercept /api/* routes for this CTF challenge
 */
export const config = {
  matcher: '/api/:path*',
}
