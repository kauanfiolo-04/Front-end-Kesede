import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './Cart.css'
import { useNavigate } from "react-router-dom";

export const Cart=()=>{
  const { getTotalAmountCart ,cartItems} = useContext(ShopContext);
  const itemsInCart=PRODUCTS.filter(product=>cartItems[product.id]!==0)
  const navigate=useNavigate()

  return(
    <div className="cart">
      <div className="cartTitle">
        <h1>Items no carrinho</h1>
      </div>
      <div className="cartItems">
        {itemsInCart.map((product)=>{        
            return <CartItem data={product} />         
        })}

        <div className="checkout">
          <p>Subtotal: R${getTotalAmountCart()}</p>
          <div className="btns">
            <button onClick={()=> navigate('/')}>Continue Shopping</button>
            <button onClick={()=> navigate('/checkout')}>Checkout</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}