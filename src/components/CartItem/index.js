import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {deleteCartItem, addQuantity, decreaseQuantity} = value
      const {cartItemDetails} = props
      const {id, name, quantity, cost, imageUrl} = cartItemDetails
      const onDeleteCartItem = () => {
        deleteCartItem(id)
      }
      const onAddQuantity = () => {
        addQuantity(id)
      }
      const onDecreaseQuantity = () => {
        decreaseQuantity(id)
      }
      return (
        <li className="cart-items" id="cartItem">
          <div className="cart-item-name-container">
            <img className="cart-product-image" src={imageUrl} alt={name} />
            <h1 className="cart-product-title-name">{name}</h1>
          </div>
          <div className="cart-quantity-container">
            <button
              id="decrement-quantity"
              onClick={onDecreaseQuantity}
              type="button"
              className="quantity-controller-button"
            >
              <BsDashSquare color="#52606D" size={10} />
            </button>
            <p id="item-quantity" className="cart-quantity">
              {quantity}
            </p>
            <button
              id="increment-quantity"
              onClick={onAddQuantity}
              type="button"
              className="quantity-controller-button"
            >
              <BsPlusSquare color="#52606D" size={10} />
            </button>
          </div>
          <div className="total-price-delete-container">
            <p className="cart-total-price">
              <FaRupeeSign /> {cost * quantity}/-
            </p>
            <button
              className="remove-button"
              type="button"
              onClick={onDeleteCartItem}
            >
              Remove
            </button>
          </div>

          <button
            className="delete-button"
            type="button"
            onClick={onDeleteCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
