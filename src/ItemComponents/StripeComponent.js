import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

class StripeComponent extends React.Component { 

    render(){
        // console.log(this.props)

        let onToken = (token) => {
            // save the token id to a variable to then use it in the body of the fetch.
            const charge = {
                token: token.id
            };

            // fetch to the charge controller which handles the Stripe API transaction.
            fetch('http://localhost:3000/charges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    // Stripe API need at least a token and a price.
                    charge: charge,
                    
                    price: this.props.price
                })
            })
            .then(res => res.json())
            .then(data => {
                this.props.sentToPastOrders()
            });
            
        };

        

        return (
            <div>
                <StripeCheckout
                    token={ onToken }
                    stripeKey={ process.env.REACT_APP_STRIPE_API_KEY }
                    // provide input for billing address.
                    billingAddress
                >
                    {/* <button onClick={this.props.sentToPastOrders}> PAY </button> */}
                </StripeCheckout>
            </div>
        );
    }
};

export default StripeComponent;