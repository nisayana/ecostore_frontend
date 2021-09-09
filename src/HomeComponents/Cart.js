import React from 'react';
import StripeComponent from '../ItemComponents/StripeComponent';
import CurrentOrder from './CurrentOrder'
import { Grid, Image, Header, Button } from "semantic-ui-react";


const Cart = (props) => {
  let totalSum = 0
  if (props.current_order.joiners.length > 0) {
    totalSum = props.current_order.joiners.reduce((agg, joiner) => {
      return agg + joiner.item_price*joiner.quantity}, 0)
  }

    // console.log("cart", props.current_order.joiners)

const handleClick = (e) => {
    // console.log("hello")
  props.currentCartIntoPastOrder()
}
  

const arrOfComps = () => {
  // console.log("from Cart", props)
  if (props.current_order.joiners){
    return props.current_order.joiners.map(joiner => <p key={joiner.id}>{joiner.item_name}</p>)
  }
}

  return (
    <div className="order center">
      <ul className="order-list">
        { totalSum === 0
        ?
        <h3>Your cart is empty</h3>
        :
        // arrOfComps()
        <CurrentOrder 
          current_order={props.current_order}
          increaseItem={props.increaseItem}
          decreaseItem={props.decreaseItem}
          deleteMyOrder={props.deleteMyOrder}
        />
        }
      </ul>

      {/* <h3>Your Total: $<span id="total">{totalSum}</span></h3> */}

      <StripeComponent
        price={totalSum}
        sentToPastOrders={handleClick}
      />
    </div>
  )
}

export default Cart;