import React from 'react';
import ItemCard from './ItemCard';
// import CurrentOrder from '../HomeComponents/CurrentOrder';


class ItemContainer extends React.Component {
    render() {
        console.log("from ItemContainer", this.props)
        // let arrayOfItems = this.props.category.items.map((item) => {
        //     return <ItemCard
        //         key={item.id}
        //         item={item} 
        //         addToMyOrders={this.props.addToMyOrders}
        //     />
        // })
        let item = this.props.items.map(singleItem => {
            return <ItemCard
                key={singleItem.id} 
                singleItem={singleItem}
                addToMyOrders={this.props.addToMyOrders}
            />
        })

        return (
            // <h1>Hello</h1>
            <div className="item-container">
                {item}
            </div>
        )
    }
}

export default ItemContainer;