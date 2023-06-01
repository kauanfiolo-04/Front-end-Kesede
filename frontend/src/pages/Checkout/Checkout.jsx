import React from 'react'
import { useContext, useState, useEffect } from 'react'
import './Checkout.css'
import { ShopContext } from '../../context/shop-context'
import {jason} from '../../xxt.js'



export const Checkout = () => {

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


