import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems , selectCartTotal } from '../../redux/cart/selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

/*import './styles.scss';*/

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './styles';

const CheckoutPage = ({cartItems , total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
            {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <WarningContainer>
                Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 <br />
                exp: 01/28 <br />
                cvv: 123
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);