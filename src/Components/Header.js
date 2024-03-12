import React from 'react'
 
import { FaCartArrowDown } from "react-icons/fa";
 
const Header = ({ quantity }) => {
  return (
    <div>
      <div>
      <ul className="nav_bar">
        <li>AddYourBag</li>
        <li>
          <FaCartArrowDown className="cart_icon" />
          <span className="cart_quantity">{quantity}</span>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Header
