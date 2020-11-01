import React from 'react';

class ItemCard extends React.Component {
    render() {

        let {name, image} = this.props.items
        console.log(this)
        return(
            <div>
                <h1>{name}</h1>
        
            </div>
        )
    }
}

export default ItemCard;