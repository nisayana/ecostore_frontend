import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CurrentOrder = (props) => {
//   let totalSum = props.current_cart.burger_orders.reduce((agg, b_order) => {
//     return agg + b_order.burger_price
//   }, 0)

  const history = useHistory();
  const handleCheckout = () => {
    history.push("/checkout")
  }

  const deleteItem = (joiner) => {
    // console.log("hello", joiner)
    props.deleteMyBooking(joiner)
  }

  let arrOfComps = props.current_booking.joiners.map(joiner => {
    return <div><h2 key={joiner.id}>{joiner.item_name}</h2>
    <button onClick={() => deleteItem(joiner)}>delete</button>
    </div>
  })

  return (
    <div className="order">
      <h2>Your Bookings</h2>
      <ul id="order-list">
        {arrOfComps}
      </ul>

      {/* <h3>Total Price: $<span id="total">{totalSum}</span></h3> */}
      <button onClick={handleCheckout} className="checkout-btn"> Pay </button>
    </div>
  )
}

export default CurrentOrder;