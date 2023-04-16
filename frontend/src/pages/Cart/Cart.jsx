import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './Cart.css'

const Cart=()=>{
  const {cartItems} = useContext(ShopContext);
  return(
    <div className="cart">
      <div>
        <h1>Items no carrinho</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>

      <div className="checkout">
        <p>Subtotal: R$</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export {
  Cart
}