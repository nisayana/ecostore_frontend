import React from 'react';
import ItemCard from './ItemCard';

class ItemContainer extends React.Component {
    render() {
        console.log("from ItemContainer", this.props)
        let arrayOfItems = this.props.category.map((items) => {
            return <ItemCard
                key={items.id}
                items={items} />
        })
        return (
            <div id="item-collection">
                {arrayOfItems}
            </div>
        )
    }
}

export default ItemContainer;