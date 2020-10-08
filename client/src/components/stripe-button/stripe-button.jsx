import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HH2SuIJp0KzQRCijnmSJ1W1jRzDBKFX2ajPmPliUvDd87y646zHoIAHo2IDNjgKEXIQEfI4dAf3W7iM8rkvNSsF00riYwAnBf'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('payment was successfulll')
        })
        .catch(error => {
            console.log(error)
            alert('there was an isuue with your payment. Please use the test credit card details given')
        })
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