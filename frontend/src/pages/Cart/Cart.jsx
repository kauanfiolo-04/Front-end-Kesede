import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './Cart.css'

const Cart=()=>{
  const { getTotalAmountCart ,cartItems} = useContext(ShopContext);
  
  console.log(getTotalAmountCart())
  return(
    <div className="cart">
      <div className="cartTitle">
        <h1>Items no carrinho</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}

        <div className="checkout">
          <p>Subtotal: R${getTotalAmountCart()}</p>
          <div className="btns">
            <button onClick={()=> document.querySelector('.links').firstChild.click()}>Continue Shopping</button>
            <button onClick={()=> window.location.href='/checkout'}>Checkout</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export {
  Cart
}