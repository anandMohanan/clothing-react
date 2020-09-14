import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HH2SuIJp0KzQRCijnmSJ1W1jRzDBKFX2ajPmPliUvDd87y646zHoIAHo2IDNjgKEXIQEfI4dAf3W7iM8rkvNSsF00riYwAnBf'

    const onToken = token => {
            console.log(token);
            alert("payment successfull")
    }
    
    return(
        <StripeCheckout
        label = 'Pay now'
        name = 'clothing-react by anand'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
        
    )
}

export default StripeCheckoutButton;