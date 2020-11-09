import React from 'react';
import SinglePastOrder from './SinglePastOrder'

class PastOrder extends React.Component{
 
  render(){
    console.log("past orders", this.props)
    let arrayOfComps = this.props.past_bookings.map(past_booking => {
      return <SinglePastOrder key={past_booking.id} past_booking={past_booking} />
    })
  
    return (
      <div className="custom">
        <h2>See Past Orders</h2>
  
        <div id="ordersDiv">
          {arrayOfComps}
        </div>
      </div>
    )
  }
}

export default PastOrder;