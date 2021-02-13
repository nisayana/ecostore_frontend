import React from 'react';

class ItemCard extends React.Component {

    handleClick = () => {
        this.props.addToMyBookings(this.props.singleItem.id)
    }

    render() {

        let {name, image, overview, price} = this.props.singleItem
        // console.log(this.props)
        return(
            // <h1>hello</h1>
            <div className="item-card">
                <img src={image} alt={image} className="item-image"/>
                <p>{name}</p>
                <p>{price}$</p>
                {/* <p>{overview}</p> */}
                <button className="button" onClick={this.handleClick}>Add to cart</button>
            </div>
        )
    }
}

export default ItemCard;