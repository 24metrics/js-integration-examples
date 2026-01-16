import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CryptoCard from '../components/CryptoCard'
import { cryptos } from '../data/cryptos'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const integrationID = location.state?.integrationID

  // Redirect to setup if no Integration ID
  useEffect(() => {
    if (!integrationID) {
      navigate('/')
    }
  }, [integrationID, navigate])

  useEffect(() => {
    // Track page load
    if (window.ASP) {
      window.ASP.trackClick({
        integrationID: `${integrationID}`,
        offer: 'Home Page',
        publisher: 'Crypto Trading Example App',
        fields: 'fingerprint,proxy_type,is_bot'
      }).then(function (response) {
        console.log(response);
      });
    }
  }, [])

  const handleCryptoClick = (crypto) => {
    // Track crypto card click
    if (window.ASP) {
      window.ASP.trackClick({
        integrationID: `${integrationID}`,
        offer: 'Home Page',
        publisher: 'Crypto Trading Example App',
        fields: 'fingerprint,proxy_type,is_bot'
      }).then(function (response) {
        console.log(response);
      });
    }

    // Navigate to crypto detail page
    navigate(`/crypto/${crypto.id}`)
  }

  return (
    <div className="home">
      <header className="header">
        <h1>Crypto Trading Platform</h1>
        <p>Explore and trade the most popular cryptocurrencies</p>
      </header>

      <div className="crypto-grid">
        {cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            onClick={() => handleCryptoClick(crypto)}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
