import React, { useState } from 'react'
import { useRouter } from 'next/router'

/**
 * Login page for the CTF challenge
 * This provides a realistic login interface that redirects to the protected endpoint
 */
export default function Home() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Redirect to the protected API endpoint
    router.push('/api/hacker')
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f0f23',
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 255, 0, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 0, 0, 0.05) 0%, transparent 50%)',
      fontFamily: 'monospace',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#1a1a2e',
        border: '2px solid #00ff41',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 0 40px rgba(0, 255, 65, 0.2)',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#00ff41', 
            fontSize: '2rem', 
            marginBottom: '10px',
            textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
          }}>
            🔐 SECURE LOGIN
          </h1>
          <p style={{ color: '#ff6b6b', fontSize: '0.85rem', marginTop: '5px' }}>
            ADMIN ACCESS PORTAL
          </p>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00ff41, transparent)',
            margin: '15px auto'
          }}></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              color: '#00ff41', 
              marginBottom: '8px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#0f0f23',
                border: '1px solid #00ff41',
                borderRadius: '6px',
                color: '#00ff41',
                fontSize: '1rem',
                fontFamily: 'monospace',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ 
              display: 'block', 
              color: '#00ff41', 
              marginBottom: '8px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px 15px',
                backgroundColor: '#0f0f23',
                border: '1px solid #00ff41',
                borderRadius: '6px',
                color: '#00ff41',
                fontSize: '1rem',
                fontFamily: 'monospace',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)'}
              onBlur={(e) => e.target.style.boxShadow = 'none'}
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#00ff41',
              color: '#0f0f23',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(0, 255, 65, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#00cc34'
              e.target.style.boxShadow = '0 6px 20px rgba(0, 255, 65, 0.5)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#00ff41'
              e.target.style.boxShadow = '0 4px 15px rgba(0, 255, 65, 0.3)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            Access Admin Panel
          </button>
        </form>

        {/* Footer Info */}
        <div style={{
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #2a2a3e',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: '#666', 
            fontSize: '0.75rem',
            marginBottom: '8px'
          }}>
            🎯 CTF Challenge: Middleware Bypass
          </p>
          <p style={{ 
            color: '#888', 
            fontSize: '0.7rem',
            lineHeight: '1.4'
          }}>
            CVE-2025-29927 (Inspired) | Authentication Bypass
          </p>
          <p style={{ 
            color: '#ff6b6b', 
            fontSize: '0.7rem',
            marginTop: '10px',
            fontStyle: 'italic'
          }}>
            💡 Hint: Browser login won't work... try curl
          </p>
        </div>
      </div>
    </div>
  )
}
