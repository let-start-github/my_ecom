import React from 'react'
// import Cart from './cart'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
const Navbarshow = () => {

const cart =()=>{
  // <Cart />
}

  return (
    <>
    <nav className="navbar">
      <span className="logo">Aru</span>
      <ul className='menuUl'>
        <li><a href='/cart' onClick={cart}>Cart</a></li>
        <li><a href='/login'>Login</a></li>
        <li><a href='/products'>Products</a></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>

    </>
  )
}

export default Navbarshow