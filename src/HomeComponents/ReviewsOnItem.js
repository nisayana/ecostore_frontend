import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

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
      <div>
        <Container className="review-container">
          {this.handleDelete()}
          <p className="review-username">{user_name}</p>
          <div className="comment-card">
            <p className="review-comment-card">{content}</p>
          </div>
      </Container>
      </div>
    );
  }

}

export default ReviewsOnItem;