import React from "react"
import { Product } from "../Shop/Product"
import { PRODUCTS } from "../../products"

const Lanches=()=>{
  const productsFiltered=PRODUCTS.filter((product)=> product.category==='lanche')

  return(
    <div className="shop">
      <div className="shopTitle">
        <h1>Lanches</h1>
      </div>
      <div className="products"> 
        {productsFiltered.map((product)=>(
          <Product data={product}/>
        ))} 
      </div>
    </div>
  )
}

export {Lanches}