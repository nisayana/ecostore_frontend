import React from 'react';
import ReviewForm from '../HomeComponents/ReviewForm';
import ReviewsOnItem from '../HomeComponents/ReviewsOnItem';
import { Link } from 'react-router-dom';

class ItemFullCard extends React.Component {

    state ={
        reviews: []
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/items/${this.props.selectedItem.id}`)
        .then(res => res.json())
        .then((itemPojo) => {
            this.setState({
                reviews: itemPojo.reviews
            })
        })
    }

    addReviewToState = (newReview) => {
        let copyOfReviews = [...this.state.reviews, newReview]
        this.setState({
            reviews: copyOfReviews
        })
    }

    deleteReview = (deletedReview) => {
        let copyOfReviews = this.state.reviews.filter(deletedItemPojo => {
            return deletedItemPojo.id !== deletedReview
        })
        this.setState({
            reviews: copyOfReviews
        })
    }

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

    handleAddToACart = () => {
        this.props.addToMyBookings(this.props.selectedItem.id)
    }


    render() {
        
        console.log("from full card", this.props)

        let reviews = this.state.reviews.map(reviewPojo => {
            return <ReviewsOnItem
                key={reviewPojo.id}
                review={reviewPojo}
                token={this.props.token}
                user_id={this.props.user_id}
                name={this.props.name}
                deleteReview={this.deleteReview}
                updatedReviewFromState={this.updatedReviewFromState}
            />
        })
        let {name, image, overview, price, id} = this.props.selectedItem

        return(
            <div>
                <Link to={`/items/${id}`}>
                    <h2>{name}</h2>
                    <div className="item-fullcard">
                        <img src={image} alt={this.props.selectedItem.name} className="item-image" />
                        <h3>{price} $</h3>
                        <button className="button" onClick={this.handleAddToACart}>Add to cart</button>
                        <p>{overview}</p>
                    </div>
                <div className='allReviews'>{reviews}</div>
                </Link>
                <ReviewForm
                    item={this.props.selectedItem}
                    token={this.props.token} 
                    addReviewToState={this.addReviewToState}
                />
            </div>
        )
    }
}

export default ItemFullCard