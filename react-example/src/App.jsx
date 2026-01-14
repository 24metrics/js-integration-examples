import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Setup from './pages/Setup'
import Home from './pages/Home'
import CryptoDetail from './pages/CryptoDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Setup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crypto/:name" element={<CryptoDetail />} />
      </Routes>
    </Router>
  )
}

export default App
