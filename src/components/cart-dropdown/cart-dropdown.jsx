import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCartHidden } from '../../redux/cart/actions';


/*import './styles.scss';*/
import { CartDropdownContainer , CartDropdownButton , EmptyMessageContainer ,CartItemsContainer } from './styles';

const CartDropdown = ({cartItems , history , dispatch}) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {   
                cartItems.length ?(
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                )
                :
                (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )
            }

        </CartItemsContainer>
        <CartDropdownButton onClick = {() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        
        }}>Go to Checkout</CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));