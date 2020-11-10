import React from 'react';

class ItemCard extends React.Component {

    handleClick = () => {
        this.props.addToMyBookings(this.props.item.id)
    }

    render() {

        let {name, price} = this.props.item
        // console.log(this.props)
        return(
            <div className="card">
                <h1>{name}</h1>
                {/* <img src={image} alt={name} className="item-image" /> */}
                <h2>{price}$</h2>
                <button className="button" onClick={this.handleClick}>Book</button>
            </div>
        )
    }
}

export default ItemCard;