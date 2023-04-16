import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Shop } from './pages/Shop/Shop'
import { Cart } from './pages/Cart/Cart'
import { ShopContextProvider } from './context/shop-context'

const App=()=>{
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/'element={<Shop/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App