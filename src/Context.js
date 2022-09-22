import React from "react"
import {useState, useEffect} from 'react'


const Context = React.createContext();

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }, [])

    function addToCart(newItem) {
        setCartItems(oldCart => [...oldCart, newItem])
    }

    function removeFromCart(id) {
        setCartItems(oldCart => oldCart.filter( item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    console.log(cartItems)

    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                // console.log(id)
                // console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    return (
    <Context.Provider value={{allPhotos: allPhotos, cartItems, toggleFavorite, addToCart, removeFromCart, emptyCart}}>
        {children}
    </Context.Provider>
    )
}

export {ContextProvider, Context};