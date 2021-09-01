import React from 'react';
import ItemCard from './ItemCard';
// import CurrentOrder from '../HomeComponents/CurrentOrder';


class ItemContainer extends React.Component {
    render() {
        let item = this.props.items.map(singleItem => {
            return <ItemCard
                key={singleItem.id} 
                singleItem={singleItem}
                addToMyOrders={this.props.addToMyOrders}
            />
        })
        return (
            <div className="item-container">
                {item}
            </div>
        )
    }
}

export default ItemContainer;