import React from 'react';

/*import './styles.scss';*/
import { connect } from 'react-redux';

import { clearItemFromCart , addItem , removeItem } from '../../redux/cart/actions';

import { CheckoutItemContainer,
        ImageContainer,
        NameAndPrice,
        Quantity,
        Arrow,
        Value,
        Removebutton } from './styles';


const CheckoutItem = ({cartItem , clearItem ,removeItem , addItem}) => (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={cartItem.imageUrl} alt="item"/>
            </ImageContainer>
            <NameAndPrice>{cartItem.name}</NameAndPrice>
            <Quantity>
                <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
                    <Value>{cartItem.quantity}</Value>    
                <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
            </Quantity>
            <NameAndPrice>{cartItem.price}</NameAndPrice>
            <Removebutton onClick={() => clearItem(cartItem)}>&#10005;</Removebutton>
        </CheckoutItemContainer>
);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);