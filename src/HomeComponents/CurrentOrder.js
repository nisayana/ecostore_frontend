import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CurrentOrder = (props) => {

  const history = useHistory();
  
  const handleCheckout = () => {
    history.push("/checkout")
  }

  const deleteItem = (joiner) => {
    console.log("hello", joiner)
    props.deleteMyBooking(joiner)
  }

  const handleIncreaseItem = (joiner) => {
    // console.log("increase", joiner)
    // console.log(props.current_booking)
    props.increaseItem(joiner)
  }

  const handleDecreaseItem = (joiner) => {
    console.log(joiner)
    props.decreaseItem(joiner)
  }

  let arrOfComps = props.current_booking.joiners.map(joiner => {
    console.log(joiner)
    return <div><p key={joiner.id}>{joiner.item_name}</p>
    <p key={joiner.id}>{joiner.item_price} $</p>
    <p> Quantity: {joiner.quantity} </p>
    <button onClick={() => handleDecreaseItem(joiner)}>-</button>
    <button onClick={() => handleIncreaseItem(joiner)}>+</button>
    {/* <button onClick={props.handleIncreaseItem}>+</button> */}
    <br/>
    <button onClick={() => deleteItem(joiner)}>delete</button>
    </div>
  })

  return (
    <div className="order">
      <h2>Your orders:</h2>
      <ul id="order-list">
        {arrOfComps}
      </ul>

      {/* <h3>Total Price: $<span id="total">{totalSum}</span></h3> */}
      <button onClick={handleCheckout} className="checkout-btn"></button>
    </div>
  )
}

export default CurrentOrder;