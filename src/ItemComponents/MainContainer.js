import React from 'react';
// import ItemCard from '../ItemCard';
import CurrentOrder from '../HomeComponents/CurrentOrder';
import ItemContainer from './ItemContainer';

function MainContainer(props){
    // console.log("from main", props)
    return(
        <div className="container">
            
            <ItemContainer 
            items = {props.items}
            token = {props.token}
            passt_orders = {props.passt_orders}
            current_order = {props.current_order}
            addToMyBookings = {props.addToMyBookings}

            />
        </div>
    )
}

export default MainContainer; 