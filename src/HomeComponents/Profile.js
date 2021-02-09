import React from 'react';
// import { useHistory } from 'react-router-dom';
import PastOrders from './PastOrders';


class Profile extends React.Component {
 
    handleCheckout = () => {
        this.props.handleLogOut()
    }

    render() {
        console.log("profile", this.props)
        return(
            <div className="container">
                {/* <h1>hello</h1> */}
                {/* <CurrentOrder currentOrder={this.props.current_booking}/> */}
                <PastOrders past_bookings={this.props.past_bookings} />
            </div>
        )
    }
}

export default Profile;