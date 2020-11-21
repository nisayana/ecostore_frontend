import React from 'react'
import { withRouter} from 'react-router-dom'
import Product from './Product'
import ReviewForm from './ReviewForm'
import ReviewsOnRestaurant from './ReviewsOnRestaurant'
import { Grid, Icon } from 'semantic-ui-react';



class SelectedRestaurant extends React.Component {

    // ----------------------------- R E V I E W S -----------------------------
    state = {
        reviews: []
    }

    componentDidMount = () => {
    fetch(`http://localhost:3000/restaurants/${this.props.restaurant.id}`)
        .then(res => res.json())
        .then((restaurantPojo) => {
            this.setState({
                reviews: restaurantPojo.reviews})
            })
    }  

 //  ----- UPDATE STATE WHEN ADDING A NEW REVIEW ----------
    addReviewToState = (newlyReview) => {
        let copyOfReviews = [...this.state.reviews, newlyReview]
        this.setState({
        reviews: copyOfReviews
        })
    }

//  ----- UPDATE STATE WHEN DELETING A REVIEW ----------
    deleteReviewFromState = (deletedID) => {
        let copyOfReviews = this.state.reviews.filter(orderObj => {
          return orderObj.id !== deletedID
        })
        this.setState({
          reviews: copyOfReviews
        })
      }   

//  ----- UPDATE STATE WHEN UPDATING A REVIEW ----------
    updatedReviewFromState = (updatedObj) => {
        let copyOfReviews = this.state.reviews.map((review) => {
          if(review.id === updatedObj.id){
            return updatedObj
          } else {
            return review
          }
        })
        this.setState({
          review: copyOfReviews
        })
      }
    

    // -------------- D I S P L A Y    P R O D U C T S ------------------------- 
    handleClick = (evt) => {
        this.props.changeSelectedCategory(evt.target.value)
    }

    render () {
        let allReviews = this.state.reviews.map(reviewPojo => {
            return <ReviewsOnRestaurant
                        key = {reviewPojo.id}
                        review ={reviewPojo}
                        token = {this.props.token} 
                        user_id = {this.props.user_id}
                        name={this.props.name}
                        deleteReviewFromState = {this.deleteReviewFromState}
                        updatedReviewFromState = {this.updatedReviewFromState}
                        />
        })
        let arrayOfProducts = this.props.productsFiltered.map(productPojo => {
                return  <Product
                          key = {productPojo.id}
                          order = {productPojo}
                          // productsFiltered = {this.props.productsFiltered}
                          addOrderToState = {this.props.addOrderToState} 
                          addOrderToCartState = {this.props.addOrderToCartState}
                          cart_id={this.props.cart_id}
                          token = {this.props.token} />         
        })

        let {name, address, timings, cuisines, phone_number, reviews_count, user_rating, user_rating_text} = this.props.restaurant

        return (
            <div>
              <div>
                <h3>Welcome to <strong>{name}</strong></h3>
                <p>This restauant is known for {cuisines}</p>
                <p>{address}</p>
                <p>{phone_number}</p>
                <p>Hours of services <br/>{timings}</p>
                <p>({reviews_count}+) people have commented in this restaurant with an average of {user_rating} <Icon name='star' /> and a grade of {user_rating_text} </p>
              </div>
                <div className ='options_cuisines' id='dishes_option' value={this.selectedCategory} onClick = {this.handleClick} >
                    <option value='All'> All</option>
                    <option value='Specialties'> Specialties</option>
                    <option value='Popular'> Popular</option>
                    <option value='Roots'> Our Roots</option>
                    <option value='Signature'> Signature Dishes</option> 
                    <option value='Drinks'> Drinks</option> 

                </div>
                <Grid doubling columns={3} id='NewGrid'>
                    {arrayOfProducts}
                </Grid>
                <ReviewForm 
                restaurant = {this.props.restaurant}
                token = {this.props.token} 
                addReviewToState = {this.addReviewToState}/>
                <div className='allReviews'>{allReviews}</div>
            </div>
        )
    }
}

export default withRouter(SelectedRestaurant)