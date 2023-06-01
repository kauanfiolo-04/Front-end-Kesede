import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./CartItem";
import './Cart.css'
import { useNavigate } from "react-router-dom";
import {jason} from '../../xxt.js'

export const Cart=()=>{
  const [PRODUCTS,setFetch]=useState(jason)
  
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const response = await fetch('http://localhost:8000/all/');
        if (response.ok) {
          const jsonData = await response.json();
          setFetch(jsonData);
        } else {
          throw new Error('Erro ao buscar os dados: ' + response.status);
        }
      } catch (error){
        console.log(error)
      }
    }

    fetchData()
  },[])


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