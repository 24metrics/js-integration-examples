import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Setup.css'

function Setup() {
  const navigate = useNavigate()
  const [integrationID, setIntegrationID] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!integrationID.trim()) {
      setError('Integration ID is required')
      return
    }
    
    navigate('/home', { state: { integrationID: integrationID.trim() } })
  }

  const handleChange = (e) => {
    setIntegrationID(e.target.value)
    if (error) setError('')
  }

  return (
    <div className="setup">
      <div className="setup-container">
        <div className="setup-header">
          <h1>24metrics Demo App</h1>
          <p className="subtitle">JavaScript SDK Integration Example</p>
        </div>

        <div className="setup-content">
          <div className="info-box">
            <h2>About This Demo</h2>
            <p>
              This application demonstrates how to integrate the 24metrics JavaScript SDK 
              to track user interactions in a crypto trading platform.
            </p>
            <p>
              Events tracked include page loads and clicks on cryptocurrency cards.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="setup-form">
            <div className="form-group">
              <label htmlFor="integrationID">Integration ID</label>
              <input
                type="text"
                id="integrationID"
                value={integrationID}
                onChange={handleChange}
                placeholder="Enter your Integration ID"
                className={error ? 'error' : ''}
              />
              {error && <p className="error-message">{error}</p>}
              <p className="form-help">
                Enter your 24metrics Integration ID to initialize the tracking SDK
              </p>
            </div>

            <button type="submit" className="submit-button">
              Continue to App
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Setup
