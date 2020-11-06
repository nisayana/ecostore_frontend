import React from 'react';
import ItemCard from './ItemCard';

class ItemContainer extends React.Component {
    render() {
        // console.log("from ItemContainer", this.props)
        let arrayOfItems = this.props.category.items.map((item) => {
            return <ItemCard
                key={item.id}
                item={item} 
                addToMyBookings={this.props.addToMyBookings}
            />
        })
        return (
            <div id="item-collection">
                {arrayOfItems}
            </div>
        )
    }
}

export default ItemContainer;