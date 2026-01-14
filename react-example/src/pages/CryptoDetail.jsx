import { useParams, useNavigate } from 'react-router-dom'
import { cryptos } from '../data/cryptos'
import './CryptoDetail.css'

function CryptoDetail() {
  const { name } = useParams()
  const navigate = useNavigate()
  
  const crypto = cryptos.find(c => c.id === name)

  if (!crypto) {
    return (
      <div className="crypto-detail">
        <div className="not-found">
          <h2>Cryptocurrency not found</h2>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
      </div>
    )
  }

  return (
    <div className="crypto-detail">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Home
      </button>
      
      <div className="detail-container">
        <div className="detail-header">
          <span className="crypto-symbol">{crypto.symbol}</span>
          <h1>{crypto.name}</h1>
          <div className="price">${crypto.price.toLocaleString()}</div>
          <div className={`change ${crypto.change24h >= 0 ? 'positive' : 'negative'}`}>
            {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}% (24h)
          </div>
        </div>

        <div className="detail-content">
          <section className="about-section">
            <h2>About {crypto.name}</h2>
            <p>{crypto.description}</p>
          </section>

          <section className="stats-section">
            <h2>Market Stats</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Market Cap</span>
                <span className="stat-value">${crypto.marketCap}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">24h Volume</span>
                <span className="stat-value">${crypto.volume24h}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Circulating Supply</span>
                <span className="stat-value">{crypto.circulatingSupply}</span>
              </div>
            </div>
          </section>

          <section className="key-features">
            <h2>Key Features</h2>
            <ul>
              {crypto.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetail
