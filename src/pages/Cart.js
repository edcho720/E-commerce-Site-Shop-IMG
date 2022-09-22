import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems, emptyCart} = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalCost = cartItems.length*5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder() {
      setButtonText("Ordering...");
      setTimeout(() => {
        console.log("Order Placed!");
        setButtonText("Place Order");
        emptyCart()
      }, 3000);
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                {cartItems.length ? <button onClick={placeOrder}>{buttonText}</button> : <p>You have no items in your cart</p>}
            </div>
        </main>
    )
}

export default Cart;