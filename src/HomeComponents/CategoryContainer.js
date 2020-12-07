import React from 'react';
import CategoryCard from './CategoryCard';
import Reviews from './Reviews';
// import {Link} from 'react-router-dom';

class CategoryContainer extends React.Component {

    state ={
        clicked: false
    }

    // handleClick = () => {
        
    // }

    createReview = (newReview) => {
        fetch('http://localhost:3000/reviews', {
            method: "POST",
            headers: {
                "content-type": "Application/JSON",
                "Authorization": `bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                category_id: this.state.id,
                review: newReview.review
            })
        })
        .then(res => res.json())
        .then((newlyCreatedReview) => {
            let reviewArr = [...this.state.reviews, newlyCreatedReview]
            this.setState({
                reviews: reviewArr
            })
        })
    }

    deleteReview = (review_id) => {
        fetch(`http://localhost:3000/reviewa/${review_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(deletedReview => {
            let newReviewArr = this.state.reviews.filter(review => review.id !== deletedReview.review.id)
            this.setState({
                ...this.state,
                reviews: newReviewArr
            })
        })
    }


    render () {
        // console.log("from Container", this)
        let categoryCard = this.props.categories.map((categoryObj) => {
            return <CategoryCard categoryCard={categoryObj} key={categoryObj.id} createReview={this.createReview} deleteReview={this.deleteReview}/>
        })
        return (
            <div>
                <div id="categories-collection">
                    {categoryCard}
                </div>
            </div>
        )
    }
}

export default CategoryContainer;