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
  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product")
      setCart(response.data);
    }
    fetchAppData();
  }, [])

  return (
    <Routes>
      <Route index element={<Home cart={cart} />} />
      <Route path='checkout' element={<Checkout cart={cart} />} />
      <Route path='orders' element={<Orders cart={cart} />} />
      <Route path='tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
