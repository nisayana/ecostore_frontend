import React from 'react';
import { withRouter } from 'react-router-dom';

class UpdateUserProfile extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello from update</h1>
            </div>
        )
    }
}

export default withRouter(UpdateUserProfile);
