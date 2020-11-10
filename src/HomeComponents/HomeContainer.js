import React from 'react';
import CategoryContainer from './CategoryContainer'

class HomeContainer extends React.Component {

  render() {
    // console.log(this)
    return(
      <div>
        <h1 id="header-home">Rossman Yoga</h1>
        {/* <img id="header" src="https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="yoga" /> */}
        <CategoryContainer categories={this.props.categories} />

      </div>
    )
  }
}

export default HomeContainer;