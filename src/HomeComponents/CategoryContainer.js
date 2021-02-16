import React from 'react';
import CategoryCard from './CategoryCard';
// import {Link} from 'react-router-dom';

class CategoryContainer extends React.Component {


    render () {
        // console.log("from Container", this.props)
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