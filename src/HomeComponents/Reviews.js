import React from 'react';
import ReviewCard from './ReviewCard'
import ReviewForm from './ReviewForm'
import { Header, Container } from 'semantic-ui-react'

class Reviews extends React.Component {

  render() {
    let reviewCard = this.props.category.reviews ?  this.props.caregory.reviews.map(review => <ReviewCard key={review.id} review={review} user={this.props.user} deleteReview={this.props.deleteReview} routerProps={this.props.routerProps} /> ) : null

      return (
          <Container className="comment-container">
              <Header className="review-container-header">Reviews:</Header>
              {reviewCard}
            <ReviewForm createReview={this.props.createReview} />
          </Container>
      );
    }
  }

export default Reviews;