import React from 'react'
import { json } from 'react-router-dom'
import './css/cart.css'
import Cartnav from '../component/Cartnav'

const Cart = () => {
  let cartArr=JSON.parse(localStorage.getItem('cart')) || []
 
  return (
    <>
    <Cartnav/>
    {
    cartArr.map((el) => {
      return (
        <>
        <div className="cart-item">
         
         <img src={el.image}></img>
         <h1>{el.title}</h1>
         <h3>{el.price}</h3>
         </div>
         
        </>
      )

    })
    }

    </>
  )
  
}

export default Cart