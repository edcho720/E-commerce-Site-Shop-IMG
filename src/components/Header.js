import React from 'react'
import {Link} from "react-router-dom"
import {useContext} from "react"
import {Context} from "../Context"


function Header() {
const {cartItems} = useContext(Context)

const cartStyle = cartItems.length ? "fill" : "line"

  return (
    <header>
        <h2><Link to="/">Shop IMG</Link></h2>
        <Link to="/cart"><i className={`ri-shopping-cart-${cartStyle} ri-fw ri-2x`}></i></Link>
    </header>
  )
}

export default Header