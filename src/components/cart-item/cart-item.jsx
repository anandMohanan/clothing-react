import React from 'react';

import './styles.scss';
import { CartItemContainer , ItemDetails , Name } from './styles';

const CartItem = ({item : {name,price,imageUrl,quantity}}) => (
    <CartItemContainer>
        <img src={imageUrl} alt="item"/>
        <ItemDetails className="item-details">
            <Name className="name">{name}</Name>
            <span className="price">{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem;