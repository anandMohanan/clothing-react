import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';

/*import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg';*/

/*import './styles.scss';*/
import { CartIconContainer , ShoppingIcon , ItemCount } from './styles';


const CartIcon = ({toggleCartHidden,itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount> {itemCount} </ItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
        toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);