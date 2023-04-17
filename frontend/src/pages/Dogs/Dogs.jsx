import React from "react"
import { PRODUCTS } from "../../products"
import { Product } from "../Shop/Product"

const Dogs=()=>{

  const productsFiltered=PRODUCTS.filter((product)=> product.category==='dog')

  return(
    <div className="shop">
      <div className="shopTitle">
        <h1>Hot Dogs</h1>
      </div>
      <div className="products">
        {productsFiltered.map((product)=>(
          <Product data={product}/>
        ))} 
      </div>
    </div>
  )
}

export {Dogs}