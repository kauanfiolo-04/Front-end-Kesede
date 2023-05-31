import React, { useState, useEffect } from "react";
import { Product } from '../../components/product/Product'
import jason from '../../xxt.json'
import './Shop.css'
const Shop=()=>{
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
  
  return(
    <div className="shop">
      <div className="shopTitle">
        <h1>Lanchonete Prensadão</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=>(
          <Product data={product}/>
        ))} 
      </div>
    </div>
  )
}

export {
  Shop
}