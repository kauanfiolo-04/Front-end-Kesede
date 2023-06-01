import React, { createContext, useState, useEffect } from 'react'
import {jason} from '../xxt.js'




// fetch('http://localhost:8000/all/')
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Erro ao buscar os dados: ' + response.status);
//     }
//   })
//   .then(data => {
//     console.log(data);
//     setFetch(true)
//     PRODUCTS=data
//   })
//   .catch(error => {
//     console.log(error);
//   })

export const ShopContext = createContext(null)

export const ShopContextProvider = (props) => {
  
  const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0
    }
    return cart
  }
  
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

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalAmountCart=()=>{
    let totalAmount=0
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo= PRODUCTS.find((product)=>product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
      
    }

    return totalAmount.toFixed(2)
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const updateCartItemCount=(newAmount, itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]: newAmount}))
  }

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmountCart }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
