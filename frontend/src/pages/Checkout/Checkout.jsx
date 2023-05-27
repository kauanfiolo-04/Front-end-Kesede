import React from 'react'
import { useContext } from 'react'
import './Checkout.css'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'

export const Checkout = () => {

  const { cartItems} = useContext(ShopContext);
  const itemsAdded=PRODUCTS.filter((product)=>cartItems[product.id]!==0)

  return (
    <div>
      Checkout
      {itemsAdded.map((product)=>(
        <h1>{product.productName}</h1>
      ))}
    </div>
  )
}


