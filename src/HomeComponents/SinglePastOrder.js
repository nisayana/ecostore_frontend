import React from 'react';

class SinglePastOrder extends React.Component{

    // state = {
    //     clicked: true
    // }

    // handleClick = (evt) => {
    //     this.setState(prevState => {
    //         return {
    //             clicked: !prevState.clicked
    //         }
    //     })
    // }

    render() {
        // console.log(this.props)
        let allPastOrders = this.props.past_order.joiners.map(past_order => {
        return <div id="ordersDiv">
            <img src={past_order.item_image} className="small-img" alt="image"/>
            {past_order.item_name}
            {/* {past_order.item_quantity} */}
            </div>
        })
        return(
            <div>
                {allPastOrders}
                {/* <p onClick={this.handleClick}>{this.props.past_order.item_name}</p>
                {this.state.clicked
                ?
                <ul>
                    {allPastOrders}
                </ul>
                :
                null
                } */}
            </div>
        )
    }
}


export default SinglePastOrder