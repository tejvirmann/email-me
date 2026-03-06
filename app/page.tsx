'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'something went wrong')
      }

      setSent(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <main style={styles.main}>
        <div style={styles.container}>
          <p style={styles.sentLabel}>received.</p>
          <button
            onClick={() => { setSent(false); setMessage(''); setEmail('') }}
            style={styles.resetBtn}
          >
            send another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Tejvir S. Mann</h1>
        <p style={styles.subheading}>
          I&apos;m not on Instagram, so this is a better way to reach me.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {error && (
            <p style={styles.error}>{error}</p>
          )}

          <div style={styles.field}>
            <label style={styles.label}>your email</label>
            <span style={styles.optional}>(optional)</span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={styles.input}
              autoComplete="email"
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>message</label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              placeholder="..."
              rows={6}
              style={{ ...styles.input, resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading || !message.trim()}
            style={{
              ...styles.btn,
              opacity: loading || !message.trim() ? 0.35 : 1,
              cursor: loading || !message.trim() ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'sending...' : 'send it'}
          </button>
        </form>

        <a href="https://www.tejvirmann.com/" target="_blank" rel="noopener noreferrer" style={styles.siteLink}>
          tejvirmann.com
        </a>
      </div>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: '#f7f6f2',
  },
  container: {
    width: '100%',
    maxWidth: '480px',
  },
  heading: {
    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
    fontWeight: 600,
    color: '#1c1c1e',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
    marginBottom: '0.6rem',
  },
  subheading: {
    fontSize: '0.9rem',
    fontWeight: 400,
    color: '#636366',
    lineHeight: 1.6,
    marginBottom: '2.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  label: {
    fontSize: '0.72rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: '#48484a',
  },
  optional: {
    fontSize: '0.68rem',
    color: '#8e8e93',
    marginLeft: '0.4rem',
    letterSpacing: '0',
    textTransform: 'none',
    fontWeight: 400,
  },
  input: {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #c7c7cc',
    color: '#1c1c1e',
    fontSize: '1rem',
    fontWeight: 400,
    padding: '0.7rem 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
  },
  btn: {
    background: 'transparent',
    border: '1px solid #3a3a3c',
    color: '#1c1c1e',
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '0.8rem 1.75rem',
    fontFamily: 'inherit',
    transition: 'opacity 0.15s',
    alignSelf: 'flex-start',
  },
  error: {
    fontSize: '0.82rem',
    color: '#c0392b',
  },
  sentLabel: {
    fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
    fontWeight: 600,
    color: '#1c1c1e',
    lineHeight: 1,
    letterSpacing: '-0.02em',
    marginBottom: '2rem',
  },
  siteLink: {
    display: 'block',
    marginTop: '3rem',
    fontSize: '0.72rem',
    color: '#aeaeb2',
    textDecoration: 'none',
    letterSpacing: '0.04em',
  },
  resetBtn: {
    background: 'transparent',
    border: 'none',
    color: '#8e8e93',
    fontSize: '0.72rem',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: 'inherit',
    padding: 0,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
}
