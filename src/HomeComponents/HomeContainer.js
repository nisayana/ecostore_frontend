import React from 'react';
import MainContainer from '../ItemComponents/MainContainer';
import CategoryContainer from './CategoryContainer'


class HomeContainer extends React.Component {

  render() {
    console.log("from Home cont", this.props)
    return(
      <div>
        <h1 id="header-home">Eco store</h1>
        {/* <h1> {this.props.generateRandomQuote} </h1> */}
        {/* <img width="290" height="300" src="https://res.cloudinary.com/dv588hi0a/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1612838686/samples/eco_store_ojhlgh.jpg" alt="eco-store"></img> */}
        {/* <video preload="none" autoplay="" muted={true} loop="" playsinline="true" src="https://video.wixstatic.com/video/b34ada_5cb4c7035b774337af2b74914d651ef3/360p/mp4/file.mp4"></video> */}
        {/* <h2>“Yoga is the journey of the self, through the self, to the self.” -The Bhagavad Gita</h2> */}
        {/* <CategoryContainer categories={this.props.categories} /> */}
        <MainContainer 
        items={this.props.items} 
        addToMyBookings = {this.props.addToMyBookings}
        />
      </div>
    )
  }
}

export default HomeContainer;