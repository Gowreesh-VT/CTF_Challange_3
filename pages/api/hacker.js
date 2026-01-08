/**
 * CTF Challenge API Endpoint: /api/hacker
 * 
 * This endpoint is protected by middleware that checks for a specific header.
 * If you're seeing this response, you've successfully bypassed the authentication!
 * 
 * CHALLENGE GOAL:
 * Access this endpoint and retrieve the flag without modifying the middleware
 * or backend code. The vulnerability lies in how the middleware validates requests.
 * 
 * SUCCESS CRITERIA:
 * - HTTP 200 response
 * - JSON payload with the CTF flag
 */

export default function handler(req, res) {
  // If this handler executes, the middleware check was bypassed
  console.log('[API] 🎯 /api/hacker endpoint reached - flag captured!')
  
  // Return success response with the CTF flag
  res.status(200).json({
    message: 'Admin access granted',
    flag: 'VV{cv3-2025-29927_n3x7j5_m1ddl3w4r3_4u7h_byp455}',
    proof: 'You bypassed the admin gate successfully',
    exploit: {
      vulnerability: 'CVE-2025-29927 Inspired',
      type: 'Middleware Authentication Bypass',
      method: 'Client-controllable header trusted for authorization',
      impact: 'Complete authentication bypass - unauthorized access to protected resources'
    },
    timestamp: new Date().toISOString()
  })
}
