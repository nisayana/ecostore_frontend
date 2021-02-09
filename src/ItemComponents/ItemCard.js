import React from 'react';

class ItemCard extends React.Component {

    handleClick = () => {
        this.props.addToMyBookings(this.props.item.id)
    }

    render() {

        let {name, image, overview, price} = this.props.item
        console.log(this.props)
        return(
            <div className="item-card">
                {/* <h1>{name}</h1> */}
                <img src={image} alt={name} className="item-image" />
                <h2>{price}$</h2>
                <h2>{overview}</h2>
                <button className="button" onClick={this.handleClick}>Add to cart</button>
            </div>
        )
    }
}

export default ItemCard;