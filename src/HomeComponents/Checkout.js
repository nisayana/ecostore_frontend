import React from 'react';
import StripeComponent from '../ItemComponents/StripeComponent';

const Checkout = (props) => {
  let totalSum = 0
  if (props.current_booking.joiners.length > 0) {
    totalSum = props.current_booking.joiners.reduce((agg, joiner) => {
      return agg + joiner.item_price}, 0)
  }

    console.log("cart", props.current_booking.joiners)

const handleClick = (e) => {
    // console.log("hello")
  props.currentCartIntoPastOrder()
}
  

const arrOfComps = () => {
  if (props.current_booking.joiners){
    return props.current_booking.joiners.map(joiner => <p key={joiner.id}>{joiner.item_name}</p>)
  }
}
  return (
    <div className="order">
      <h2>Cart</h2>
      <ul id="order-list">
        { totalSum === 0
        ?
        <p>Your cart is empty</p>
        :
        arrOfComps()
        }
      </ul>
      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <StripeComponent
      price={totalSum}
      sentToPastOrders={handleClick}
      />
    </div>
  )
}

export default Checkout;