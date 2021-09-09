import React from 'react';
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import PastOrders from './PastOrders';
import { Icon, Button } from 'semantic-ui-react'


class Profile extends React.Component {

    handleUpdateInfo = () => {
        console.log("handle update info", this.props)
        this.props.history.push("/profile/edit")
    }

    render() {
        console.log("from profile", this.props)
        return(
            <div>
                {/* <h1>Welcome!</h1> */}
                <div className="user-info">
                    <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Personal.png" alt="image" id="userAvatar"/>
                    <p> {this.props.first_name} {this.props.last_name}</p>
                    <p><strong>Email: </strong>{this.props.email}</p>
                    <p><strong>Address:</strong> {this.props.address}</p>
                    <p><strong>City:</strong> {this.props.city}</p>
                    <p><strong>State:</strong> {this.props.state}</p>
                    <p><strong>Zip code:</strong> {this.props.zip}</p>
                    <button onClick={this.handleUpdateInfo}>Update Information</button>
                </div>
                <div className="order-list">
                    {/* <h1>hello</h1> */}
                    {/* <CurrentOrder currentOrder={this.props.current_order}/> */}
                    <PastOrders past_orders={this.props.past_orders} />
                </div>
            </div>
        )
    }
}

export default withRouter(Profile);