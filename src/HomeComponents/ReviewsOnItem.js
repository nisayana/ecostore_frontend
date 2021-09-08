import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
// import StarRatingComponent from 'react-star-rating-component';
import { List, Icon } from 'semantic-ui-react';
// import { DeleteIcon } from 'semantic-ui-react';


class ReviewsOnItem extends Component {

  state={
    content: "",
    rating: ""
  }

  handleDelete = (evt) => {
    fetch(`http://localhost:3000/reviews/${this.props.review.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((deletedObj) => {
      // console.log(deletedObj)
      this.props.deleteReview(deletedObj.id)
    })
  }

  render() {
    let {content, rating, user_name} = this.props.review

    if (this.props.user_id === this.props.review.user_id) {
      return (
        <div>
          <Container className="review-container">
            <p className="review-username">{user_name}</p>
            <div className="comment-card">
              <p className="review-comment-card">{content}</p>
            </div>
            <button onClick={this.handleDelete}>Delete</button>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <p >{user_name}</p>
            <div>
              <p>{content}</p>
            </div>
            {/* <button onClick={this.handleDelete}>Delete</button> */}
        </Container>
        </div>
      );
    }
  }
}

export default ReviewsOnItem;