import { useState } from 'react'
import { fakeLogin } from '../api'

export default function AuthForm() {
  const [pending, setPending] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [result, setResult] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setPending(true)
    setError(null)
    setResult('')

    try {
      await fakeLogin({ email, password })
      setResult('Email ' + email + ' logged in')
    } catch (e) {
      setError(e.message)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          type="email"
          className="validate"
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="input-field">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          type="password"
          className="validate"
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn" type="submit" disabled={pending}>
        {pending ? 'Loading...' : 'Submit'}
      </button>
      {result && <p>{result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}
