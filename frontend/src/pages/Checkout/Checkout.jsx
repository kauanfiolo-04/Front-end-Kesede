import React from 'react'
import { useContext, useState, useEffect, useRef } from 'react'
import './Checkout.css'
import { ShopContext } from '../../context/shop-context'
import { jason } from '../../xxt.js'

export const Checkout = () => {
  const [PRODUCTS, setFetch] = useState(jason)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/all/')
        if (response.ok) {
          const jsonData = await response.json()
          setFetch(jsonData)
        } else {
          throw new Error('Erro ao buscar os dados: ' + response.status)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  const { cartItems, getTotalAmountCart } = useContext(ShopContext)
  const itemsAdded = PRODUCTS.filter((product) => cartItems[product.id] !== 0)
  const contentWrapper = useRef(null)
  const address = useRef(null)

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Checkout</h1>
      </div>

      <div style={{ width: '100%' }} ref={contentWrapper}>
        <div className="cartItems">
          {itemsAdded.map((item) => (
            <div className="checkoutItem">
              <span>
                {0 === cartItems[item.id]
                  ? item.productName
                  : cartItems[item.id] + ' X ' + item.productName}
              </span>
              <p>-</p>
              <span>R$ {cartItems[item.id] * item.price}</span>
            </div>
          ))}

          <span
            style={{ fontWeight: 'bold', fontSize: '1.5em', color: '#460000' }}
          >
            Total: R$ {getTotalAmountCart()}
          </span>

          <label className="address">
            <input
              ref={address}
              type="text"
              placeholder="Digite seu endereço"
            />
          </label>

          <button
            onClick={(e, endereco = address.current) => {
              console.log(endereco)
              const div = document.createElement('div')
              div.classList.add('confirmationWrapper')
              div.innerHTML = `
              <p> 
                Seu pedido no endereço:<br>
                <span>
                  ${endereco && endereco.value}
                </span><br>
                Foi confirmado ✅<br>
                Tempo estimado entre 30 a 50 minutos!<br>
                Agradecemos pela preferência!
              </p>
            `
              if (contentWrapper.current) {
                contentWrapper.current.classList.add('hidden')
                contentWrapper.current.parentElement.appendChild(div)
              }
            }}
            className="checkoutBtn"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}
