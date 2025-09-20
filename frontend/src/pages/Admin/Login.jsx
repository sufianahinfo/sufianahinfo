import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication - in real app, validate credentials
      if (formData.email === 'admin@sufianah.com' && formData.password === 'admin123') {
        localStorage.setItem('token', 'mock-admin-token')
        navigate('/admin/dashboard')
      } else {
        setError('Invalid email or password')
      }
    } catch (error) {
      setError('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>Sufianah Admin</h1>
            <p>Sign in to manage your fragrance store</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="admin@sufianah.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <p>Demo Credentials:</p>
            <p><strong>Email:</strong> admin@sufianah.com</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .admin-login {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          padding: 2rem;
        }

        .login-container {
          width: 100%;
          max-width: 400px;
        }

        .login-card {
          background-color: var(--white);
          padding: 3rem;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-header h1 {
          color: var(--primary-gold);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .login-header p {
          color: var(--gray-600);
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: var(--gray-700);
          font-weight: 500;
          font-size: 0.875rem;
        }

        .form-input {
          padding: 0.75rem 1rem;
          border: 2px solid var(--gray-300);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-gold);
        }

        .login-btn {
          width: 100%;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .login-btn:disabled {
          background-color: var(--gray-400);
          cursor: not-allowed;
        }

        .error-message {
          background-color: #fee2e2;
          color: #991b1b;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          text-align: center;
        }

        .login-footer {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--gray-200);
          text-align: center;
        }

        .login-footer p {
          color: var(--gray-600);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .login-footer p:first-child {
          font-weight: 600;
          color: var(--gray-700);
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 2rem;
          }

          .login-header h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default AdminLogin