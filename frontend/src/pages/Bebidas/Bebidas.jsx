import React from "react"
import { PRODUCTS } from "../../products"
import { Product } from "../../components/product/Product"
import "./Bebidas.css"

const Bebidas=()=>{
  return(
    <div className="drinksWrapper">
      <div className="drinkTitle">
        <h1>Bebidas</h1>
      </div>

      <div className="products">
        {PRODUCTS.filter(el=>el.category==='drink').map((product)=>(
          <Product data={product}/>
        ))}
      </div>
    </div>
  )
}

export {Bebidas}