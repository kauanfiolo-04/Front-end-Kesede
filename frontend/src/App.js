import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { Shop } from './pages/Shop/Shop'
import { Cart } from './pages/Cart/Cart'
import { ShopContextProvider } from './context/shop-context'
import Checkout from './pages/Checkout/Checkout'
import { Dogs } from './pages/Dogs/Dogs'
import { Bebidas } from './pages/Bebidas/Bebidas'
import { Lanches } from './pages/Lanches/Lanches'

const App=()=>{
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/dogs' element={<Dogs/>}/>
          <Route path='/bebidas' element={<Bebidas/>}/>
          <Route path='/lanches' element={<Lanches/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App