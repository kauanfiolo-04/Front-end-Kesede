import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './Product.css'

const Product = (props) => {
  const { id, productName, price, productImage } = props.data
  const { addToCart, cartItems } = useContext(ShopContext)

  const cartItemAmount = cartItems[id]
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="description">
        
          <b>{productName}</b>
        
        <p>R$ {price.toFixed(2)}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Adicionar ao Carrinho {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )
}

export { Product }
