import React from 'react';
import SinglePastOrder from './SinglePastOrder'

class PastOrder extends React.Component{
 
  render(){
    // console.log("past orders", this.props)
    let arrayOfComps = this.props.past_orders.map(past_order => {
      return <SinglePastOrder key={past_order.id} past_order={past_order} />
    })

    console.log(arrayOfComps)
  
    return (
      <div className="custom">
        <h1>Orders:</h1>
  
        <div>
          {arrayOfComps}
        </div>
      </div>
    )
  }
}

export default PastOrder;