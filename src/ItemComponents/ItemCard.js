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
                <img src={image} alt={name} className="item-image" />
                <p>{name}</p>
                <p>{price}$</p>
                {/* <p>{overview}</p> */}
                <button className="button" onClick={this.handleClick}>Add to cart</button>
            </div>
        )
    }
}

export default ItemCard;