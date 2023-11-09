import React from 'react'
import '../pages/css/navbar.css';

const Productnav = () => {
  const check=(e) => {
    console.log("changed",e.target.value)
  }
  return (
    <nav className="navbar">
      <span className="logo">Aru</span>
      <ul className='menuUl'>
      <select className='filterval' onChange={(e)=>{
        check(e)
      }}>
          <option value="">filter</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        
        </select>
      <select className='sortvalue' onChange={(e)=>{
        check(e)
      }}>
          <option value="">sort</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        
        </select>
        {/* <li><a href='' onClick={cart}>Cart</a></li> */}
        <li><a href='/cart'>Cart</a></li>
        <li><a href=''>Profile</a></li>
        <li><a href='/'>Log Out</a></li>
        
        
      </ul>
      <div id="navigation">
            <div id="menu" >
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

export default Productnav