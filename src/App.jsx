import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { Checkout } from './pages/Checkout'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='checkout' element={<Checkout />} />
    </Routes>
  )
}

export default App
