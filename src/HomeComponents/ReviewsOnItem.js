import React, { Component } from 'react';
import { Container, Rating } from 'semantic-ui-react'

class ReviewsOnItem extends Component {

  state={
    content: ""
  }

  handleDelete = (evt) => {
    fetch(`http://localhsot:3000/reviews/${this.props.review.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((deletedObj) => {
      this.props.deleteReview(deletedObj.id)
    })
  }

  render() {
    console.log(this.props.review);
    let {content, user_name} = this.props.review

    

    return (
      <h1>Hello from reviews on item</h1>
      // <Container className="review-container">
      //     {this.showDeleteButton()}
      //     <p className="review-username">{username}</p>
      //     <div className="comment-rating-card">
      //       <p className="review-comment-card">{review}</p>
      //     </div>
      // </Container>
    );
  }

}

export default ReviewsOnItem;