import React from 'react';
import ItemCard from './ItemCard';
import CurrentOrder from '../HomeComponents/CurrentOrder';


class ItemContainer extends React.Component {
    render() {
        console.log("from ItemContainer", this.props)
        let arrayOfItems = this.props.category.items.map((item) => {
            return <ItemCard
                key={item.id}
                item={item} 
                addToMyBookings={this.props.addToMyBookings}
            />
        })
        return (
            // <h1>hello</h1>
            <div className="menu">
                {arrayOfItems}
            </div>
            // <div className="container">
            //     <ItemCard arrayOfItems={arrayOfItems}/>
            //     <CurrentOrder currentOrder={this.props.current_booking}/>
            // </div>
        )
    }
}

export default ItemContainer;