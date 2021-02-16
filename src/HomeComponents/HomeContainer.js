import React from 'react';
import MainContainer from '../ItemComponents/MainContainer';
import CategoryContainer from './CategoryContainer'


class HomeContainer extends React.Component {

  render() {
    // console.log("from Home cont", this.props)
    return(
      <div>
        <h1 id="header-home">Eco Store</h1>
        <img id="banner" height="300" src="https://res.cloudinary.com/dv588hi0a/image/upload/v1613493366/samples/Screen_Shot_2021-02-16_at_11.35.25_AM_ioujfg.png" alt="eco-store"></img>
        {/* <video preload="none" autoplay="" muted={true} loop="" playsinline="true" src="https://video.wixstatic.com/video/b34ada_5cb4c7035b774337af2b74914d651ef3/360p/mp4/file.mp4"></video> */}
        {/* <h2>“Yoga is the journey of the self, through the self, to the self.” -The Bhagavad Gita</h2> */}
        {/* <CategoryContainer categories={this.props.categories} /> */}
        <MainContainer 
        items={this.props.items} 
        token = {this.props.token}
        past_bookings = {this.props.past_bookings}
        current_booking = {this.props.current_booking}
        addToMyBookings = {this.props.addToMyBookings}
        deleteMyBooking = {this.props.deleteMyBooking}
        increaseItem = {this.props.increaseItem}
        decreaseItem = {this.props.decreaseItem}
        />
      </div>
    )
  }
}

export default HomeContainer;