import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const result = useSelector((state)=>state.cartData)
    console.log("header redux", result)
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <img src='https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png' alt='' />
        </div>
      
    </div>
  )
}

export default Header;
