import React from 'react';
import { useHistory } from 'react-router-dom';
// import CurrentOrder from './CurrentOrder';
// import PastOrders from './PastOrders';


class Profile extends React.Component {
 
    handleCheckout = () => {
        this.props.handleLogOut()
    }

    render() {
        console.log("profile", this.props)
        return(
            <div className="container">
                {/* <CurrentOrder currentOrder={this.props.current_booking}/> */}
                {/* <PastOrders/> */}
            </div>
        )
    }
}

export default Profile;