import Header from '../Header'
import CartList from '../CartList'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'
import Footer from '../Footer'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      return (
        <>
          <Header activeTab="CART" />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-container">
                <div className="cart-headings-container">
                  <p className="item">Item</p>
                  <p className="quantity">Quantity</p>
                  <p className="price">Price</p>
                  <p className="remove">Remove</p>
                </div>
                <CartList />
                <CartSummary />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
