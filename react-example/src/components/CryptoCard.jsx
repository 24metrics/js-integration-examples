import './CryptoCard.css'

function CryptoCard({ crypto, onClick }) {
  return (
    <div className="crypto-card" onClick={onClick}>
      <div className="card-header">
        <span className="crypto-symbol">{crypto.symbol}</span>
        <h3>{crypto.name}</h3>
      </div>
      <div className="card-body">
        <div className="price">${crypto.price.toLocaleString()}</div>
        <div className={`change ${crypto.change24h >= 0 ? 'positive' : 'negative'}`}>
          {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
        </div>
      </div>
      <div className="card-footer">
        <span className="market-cap">
          Market Cap: ${crypto.marketCap}
        </span>
      </div>
    </div>
  )
}

export default CryptoCard
