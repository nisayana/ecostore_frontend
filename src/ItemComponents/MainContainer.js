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
            //  category = {props.category} 
            token = {props.token}
            past_bookings = {props.past_bookings}
            current_booking = {props.current_booking}
            addToMyBookings = {props.addToMyBookings}

            />
        </div>
    )
}

export default MainContainer; 