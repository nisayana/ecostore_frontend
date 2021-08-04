import React from 'react';
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import PastOrders from './PastOrders';
import { Icon, Button } from 'semantic-ui-react'


class Profile extends React.Component {
 
    handleCheckout = () => {
        this.props.handleLogOut()
    }

    handleUpdateInfo = () => {
        console.log("update info")
        this.props.history.push("/profile/edit")
    }

    render() {
        return(
            <div>
                {/* <h1>Welcome!</h1> */}
                <div className="user-info">
                    <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Personal.png" alt="image" id="userAvatar"/>
                    <p> {this.props.first_name} {this.props.last_name}</p>
                    <p><strong>Email: </strong>{this.props.email}</p>
                    <p><strong>Address:</strong> {this.props.address}</p>
                    <button onClick={this.handleUpdateInfo}>Update Information</button>
                </div>
                <div className="order-list">
                    {/* <h1>hello</h1> */}
                    {/* <CurrentOrder currentOrder={this.props.current_booking}/> */}
                    <PastOrders past_bookings={this.props.past_bookings} />
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);