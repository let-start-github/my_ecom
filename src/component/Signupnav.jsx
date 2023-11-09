import React from 'react'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Loginnav = () => {
  const onClickMenu=() => {
    
  }
  return (
    <nav className="navbar">
      <span className="logo">Aru</span>
      <ul className='menuUl'>
        {/* <li><a href='' onClick={cart}>Cart</a></li> */}
        <li><a href='/'>Home</a></li>
        <li><a href='/login'>Log In</a></li>
        
      </ul>
      <div id="navigation">
            <div id="menu" onclick={onClickMenu }>
            <div id="bar1" class="bar"></div> 
            <div id="bar2" class="bar"></div> 
            <div id="bar3" class="bar"></div> 
        </div>
        <ul id="nav" class="nav">
            <li><button onclick="show()">HOMEPAGE</button></li>
            <li><button onclick="showProduct()" id="btn">SHOW PRODUCT</button></li>
            <li><a href="cart.html"><button>CART</button></a></li>
            <li><a href="index.html" onclick="logout()"><button>LOGOUT</button></a></li>
            {/* <!-- <li><a href=""></a></li> --> */}
        </ul>
        </div>
    </nav>
  )
}
export default Loginnav