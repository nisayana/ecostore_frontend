import React from 'react';
import ItemFullCard from './ItemFullCard';
import {Link, withRouter} from 'react-router-dom';


class ItemCard extends React.Component {

    handleAddToACart = () => {
        this.props.addToMyBookings(this.props.singleItem.id, this.props.singleItem.name)
    }

    handleFullItemCont = () => {
        // console.log(this)
    }

    render() {

        let {name, image, overview, price, id} = this.props.singleItem
        // console.log(this.props)
        return(
            // <h1>hello</h1>
            <div className="item-card">
                <Link to={`/items/${id}`}>
                <img src={image} alt={image} onClick={this.handleFullItemCont} className="item-image"/>
                <p>{name}</p>
                <p>{price}$</p>
                {/* <p>{overview}</p> */}
                </Link>
                <button className="button" onClick={this.handleAddToACart}>Add to cart</button>
            </div>
        )
    }
}

export default ItemCard;