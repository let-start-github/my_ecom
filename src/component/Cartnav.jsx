import React from 'react'


const Cartnav = () => {
  const onClickMenu=() => {
    
  }
  return (
    <nav className="navbar">
      <span className="logo">Aru</span>
      <ul className='menuUl'>
        {/* <li><a href='' onClick={cart}>Cart</a></li> */}
        <li><a href='/products'>Product</a></li>
        <li><a href=''>Profile</a></li>
        <li><a href='/'>Log Out</a></li>
        
      </ul>
      <div id="navigation">
            <div id="menu" onClick={onClickMenu }>
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

export default Cartnav