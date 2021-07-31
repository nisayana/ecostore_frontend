import React from 'react';
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import PastOrders from './PastOrders';
import { Icon, Button } from 'semantic-ui-react'


class Profile extends React.Component {
 
    handleCheckout = () => {
        this.props.handleLogOut()
    }

    handleClick = () => {
        this.props.history.push('/profile/edit')
    }

    render() {
        console.log("profile", this.props)
        return(
            <div>
                <h1>Welcome!</h1>
                <div className="user-info">
                    <img src="" alt="image"/>
                    {/* <Icon name='user circle' inverted color='black' id='userAvatar'/>  */}
                    <p> {this.props.first_name} {this.props.last_name}</p>
                    <p><strong>Email: </strong>{this.props.email}</p>
                    <p><strong>Address:</strong> {this.props.address}</p>
                    <button onClick={this.handleClick}>Update Information</button>
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