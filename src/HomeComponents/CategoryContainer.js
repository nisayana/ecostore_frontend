import React from 'react';
import CategoryCard from './CategoryCard';
import {Link} from 'react-router-dom';

class CategoryContainer extends React.Component {
    // handleClick = () => {
        
    // }

    render () {
        // console.log("from Container", this)
        let categoryCard = this.props.categories.map((categoryObj) => {
            return <CategoryCard categoryCard={categoryObj} key={categoryObj.id}/>
        })
        return (
            <div id="category-collection">
                {categoryCard}
            </div>
        )
    }
}

export default CategoryContainer;