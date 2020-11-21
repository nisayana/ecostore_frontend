import React from 'react';
import CategoryContainer from './CategoryContainer'

class HomeContainer extends React.Component {

  render() {
    // console.log(this.props.generateRandomQuote.quote)
    return(
      <div>
        <h1 id="header-home">Lotus Yoga</h1>
        {/* <h1> {this.props.generateRandomQuote} </h1> */}
        <img width="290" height="300" src="https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled-290x300.jpeg?ssl=1" class="attachment-medium size-medium jetpack-lazy-image jetpack-lazy-image--handled" alt="" srcset="https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=290%2C300&amp;ssl=1 290w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=990%2C1024&amp;ssl=1 990w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=768%2C795&amp;ssl=1 768w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=1484%2C1536&amp;ssl=1 1484w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=1979%2C2048&amp;ssl=1 1979w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?resize=600%2C621&amp;ssl=1 600w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.yogamu.org/wp-content/uploads/2020/11/AdobeStock_253351122-scaled.jpeg?w=1920&amp;ssl=1 1920w" data-recalc-dims="1" data-lazy-loaded="1" sizes="(max-width: 290px) 100vw, 290px"></img>
        {/* <video preload="none" autoplay="" muted={true} loop="" playsinline="true" src="https://video.wixstatic.com/video/b34ada_5cb4c7035b774337af2b74914d651ef3/360p/mp4/file.mp4"></video> */}
        <h2>“Yoga is the journey of the self, through the self, to the self.” -The Bhagavad Gita</h2>
        <CategoryContainer categories={this.props.categories} />
      </div>
    )
  }
}

export default HomeContainer;