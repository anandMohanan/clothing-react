import React from 'react';
import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';
import { signOutStart } from '../../redux/user/actions';

import { HeaderContainer ,
         LogoContainer ,
         OptionsContainer,
         OptionDiv,
         OptionLink } from './styles';

const Header = ({currentUser , hidden , signOutStart}) =>(
       <HeaderContainer>
            <LogoContainer to='/'>
               <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
             <OptionLink to='/shop'>Shop</OptionLink>
             
             {
                currentUser ? 
                <OptionDiv onClick={signOutStart}>Sign Out</OptionDiv> 
                :
                <OptionLink to='/signin'>Sign In</OptionLink>
             }
             <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);