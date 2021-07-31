import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Grid, Image, Header, Button } from "semantic-ui-react";


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
    // debugger
    props.increaseItem(joiner)
  }

  const handleDecreaseItem = (joiner) => {
    console.log(joiner)
    props.decreaseItem(joiner)
  }

  let arrOfComps = props.current_booking.joiners.map(joiner => {
    // console.log(joiner)
    return (<div className="shopping-cart cart">
      <img src={joiner.item_image} alt="image" id="cart-img" />
      <h3 key={joiner.id}>{joiner.item_name}</h3>
      <p>{joiner.item_price} $</p>
      <p> Quantity: {joiner.quantity}
      <button onClick={() => handleDecreaseItem(joiner)}>-</button>
      <button onClick={() => handleIncreaseItem(joiner)}>+</button>
      </p>
      <button onClick={() => deleteItem(joiner)}>delete</button>
    </div>)
  })

  return (
    <div className="order">
      <h2>Your orders:</h2>
      <ul className="order-list">
        {arrOfComps}
      </ul>

      {/* <h3>Total Price: $<span id="total">{totalSum}</span></h3> */}
      <button onClick={handleCheckout} className="checkout-btn"></button>
    </div>
  )
}

export default CurrentOrder;