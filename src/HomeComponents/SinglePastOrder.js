import React from 'react';

class SinglePastOrder extends React.Component{

    state = {
        clicked: true
    }

    handleClick = (evt) => {
        this.setState(prevState => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    render() {
        // console.log(this.props.past_booking.joiners)
        let allPastOrders = this.props.past_booking.joiners.map(past_booking => {
        return <li>{past_booking.item_name}</li>
        })
        return(
            <div>
                <p onClick={this.handleClick}>{this.props.past_booking.item_name}</p>
                {this.state.clicked
                ?
                <ul>
                    {allPastOrders}
                </ul>
                :
                null
                }
            </div>
        )
    }
}


export default SinglePastOrder