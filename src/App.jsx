import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='checkout' element={<div>Checkout Page</div>} />
    </Routes>
  )
}

export default App
