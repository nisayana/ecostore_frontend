import React from 'react';
// import ItemCard from '../ItemCard';
import CurrentOrder from '../HomeComponents/CurrentOrder';
import ItemContainer from './ItemContainer';

function MainContainer(props){
    return(
        <div>      
            <ItemContainer 
            items = {props.items}
            token = {props.token}
            past_orders = {props.past_orders}
            current_order = {props.current_order}
            addToMyOrders = {props.addToMyOrders}
            />
        </div>
    )
}

export default MainContainer; 