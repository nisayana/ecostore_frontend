import React from 'react';
import {Link, withRouter} from 'react-router-dom';


class CategoryCard extends React.Component {


    handleClick = () => {

    }

    render() {
        // console.log("from Card", this.props)
        let {name, image, description, id} = this.props.categoryCard


        return(
            <div>
                <div className="category-card">
                    <Link to={`/categories/${id}`}>
                        <img src={image} alt={this.props.categoryCard.name} onClick={this.handleClick} className="category-image" />
                        <h2>{this.props.categoryCard.name}</h2>
                    </Link>
                    <p>{this.props.categoryCard.description}</p>
                </div>   
            </div>
        )
    }
}

export default withRouter(CategoryCard);