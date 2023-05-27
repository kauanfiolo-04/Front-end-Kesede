import React from 'react'
import { useContext } from 'react'
import './Checkout.css'
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../products'

const Checkout = () => {

  const { cartItems} = useContext(ShopContext);
  console.log(cartItems)
  const returnedProd=PRODUCTS.filter((product)=>cartItems[product.id]!==0)
  console.log(returnedProd)

  return (
    <div>
      Checkout
      {returnedProd.map((product)=>(
        <h1>{product.productName}</h1>
      ))}

    </div>
  )
}

export default Checkout
