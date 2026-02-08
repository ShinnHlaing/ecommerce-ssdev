import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import { Checkout } from './pages/checkout/Checkout'
import { Orders } from './pages/order/Orders'
import { Tracking } from './pages/Tracking'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product")
    setCart(response.data);
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadCart();
  }, [])

  return (
    <Routes>
      <Route index element={<Home cart={cart} loadCart={loadCart} />} />
      <Route path='checkout' element={<Checkout cart={cart} loadCart={loadCart} />} />
      <Route path='orders' element={<Orders cart={cart} />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
