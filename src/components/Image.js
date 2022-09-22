import React from "react"
import {useContext} from "react"
import {Context} from "../Context"
import Proptypes from "prop-types"
import useHover from '../hooks/useHover'

export default function Image({className, img}) {
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover()
  const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context);

  // console.log(hovered)

    function heartIcon() {
      if(img.isFavorite) { 
        return <i 
        className="ri-heart-fill favorite"
        onClick={()=> toggleFavorite(img.id)}></i>
      } else if(hovered) {
        return <i 
        className="ri-heart-line favorite"
        onClick={()=> toggleFavorite(img.id)}></i>
      }
    }



    function cartIcon() {
      const alreadyInCart = cartItems.some(item => item.id === img.id)
      if(alreadyInCart) {
        return <i 
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
          ></i>
      } else if(hovered) {
        return <i 
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
          ></i>
      }
    }

    return (
        <div className={`${className} image-container`}
            ref={ref}
        >
            <img 
              src={img.url} 
              className="image-grid"
              alt=""
            />
          {heartIcon()}
          {cartIcon()}
        </div>
    )
}

Image.propTypes = {
  className: Proptypes.string,
  img: Proptypes.shape({
      id: Proptypes.string.isRequired,
      url: Proptypes.string.isRequired,
      isFavorite: Proptypes.bool
  })
}
