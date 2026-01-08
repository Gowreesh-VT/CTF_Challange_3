export default function handler(req, res) {

  console.log('[API] 🎯 /api/hacker endpoint reached - flag captured!')
  
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
