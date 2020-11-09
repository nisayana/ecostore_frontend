import React from 'react';

const Cart = (props) => {
//   let totalSum = props.current_cart.burger_orders.reduce((agg, b_order) => {
//     return agg + b_order.burger_price
//   }, 0)

    console.log("cart", props)

  const handleClick = (e) => {
    props.currentCartIntoPastOrder()
  }

  const arrOfComps = () => {

    if (props.current_booking){
      return props.current_booking.joiners.map(joiner => <p key={joiner.id}>{joiner.item_name}</p>)
  }
}
  return (
    <div className="order">
      <h2>Your Bookings</h2>
      <ul id="order-list">
        {arrOfComps()}
      </ul>

      {/* <h3>Total Price: $<span id="total">{totalSum}</span></h3> */}
      <button onClick={handleClick} className="submit"> Pay </button>
    </div>
  )
}

export default Cart;