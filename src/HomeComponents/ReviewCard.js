import React, { Component } from 'react';
import { Container, Rating } from 'semantic-ui-react'

class ReviewCard extends Component {

  handleDelete = () => {
    let review_id = this.props.review.id
    this.props.deleteReview(review_id)
  }

  showDeleteButton = () => {
      if(localStorage.token && this.props.review.user_id === this.props.user.id){
          return <span className="review-delete-button" onClick={this.handleDelete}>&times;</span>
      }
  }

  render() {
    console.log(this.props.review);
    let {review, username} = this.props.review

    return (
      <Container className="review-container">
          {this.showDeleteButton()}
          <p className="review-username">{username}</p>
          <div className="comment-rating-card">
            <p className="review-comment-card">{review}</p>
          </div>
      </Container>
    );
  }

}

export default ReviewCard;