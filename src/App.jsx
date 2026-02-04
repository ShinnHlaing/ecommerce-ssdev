import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='orders' element={<Orders />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
