import React from "react"
import { Link } from "react-router-dom"
import { ShoppingCart } from "phosphor-react"
import './navbar.css'

const Navbar=()=>{
  return(
    <div className="navbar">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/dogs">Hot Dogs</Link>
        <Link to="/bebidas">Bebidas</Link>
        <Link to="/lanches">Lanches</Link>
        <Link to="/cart">
          <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  )
}

export {
  Navbar
}