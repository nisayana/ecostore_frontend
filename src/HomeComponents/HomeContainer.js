import React from 'react';
import MainContainer from '../ItemComponents/MainContainer';
import CategoryContainer from './CategoryContainer'


class HomeContainer extends React.Component {

  render() {
    // console.log("from Home cont", this.props)
    return(
      <div>
        <div class="home-img-container">
          <img id="banner" height="300" src="https://res.cloudinary.com/dv588hi0a/image/upload/v1613493366/samples/Screen_Shot_2021-02-16_at_11.35.25_AM_ioujfg.png" alt="eco-store"></img>
          <div class="slogan">
            <h1>Choose a better tomorrow</h1>
          </div>
        </div>
        <MainContainer 
        items={this.props.items} 
        token = {this.props.token}
        past_orders = {this.props.past_orders}
        current_order = {this.props.current_order}
        addToMyOrders = {this.props.addToMyOrders}
        deleteMyOrder = {this.props.deleteMyOrder}
        increaseItem = {this.props.increaseItem}
        decreaseItem = {this.props.decreaseItem}
        />
      </div>
    )
  }
}

export default HomeContainer;