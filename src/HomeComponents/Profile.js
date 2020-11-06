import React from 'react';
// import CurrentOrder from './CurrentOrder';
import PastOrders from './PastOrders';


class Profile extends React.Component {

    logoutOnClick = () => {
        this.props.handleLogOut()
    }

    render() {
        console.log("profile", this)

        return(
            <div className="container">
                {/* <CurrentOrder/> */}
                <PastOrders/>
            </div>
        )
    }
}

export default Profile;