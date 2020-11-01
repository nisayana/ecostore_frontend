import React from 'react';
import {Link} from 'react-router-dom';

class CategoryCard extends React.Component {

    handleClick = () => {

    }

    render() {
        console.log("from Card", this)
        let {name, image, description, id} = this.props.categoryCard

        return(
            <div className="card">
                {/* <Link to={`/categories/${id}/items`}> */}
                    <img src={image} alt={this.props.categoryCard.name} onClick={this.handleClick} className="category-image" />
                    <h2>{this.props.categoryCard.name}</h2>
                    <p>{this.props.categoryCard.descritpion}</p>

                {/* </Link> */}
            </div>
        )
    }
}

export default CategoryCard;