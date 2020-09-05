import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';

import {ReactComponent as Logo} from '../../assets/crown.svg.svg';
import './styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartHidden } from '../../redux/cart/selectors';
import { selectCurrentUser } from '../../redux/user/selectors';

const Header = ({currentUser , hidden}) =>(
       <div className="header">
            <Link className='logo-container' to='/'>
               <Logo className='logo'/>
            </Link>
            <div className="options">
             <Link className='option' to='/shop'>Shop</Link>
             <Link className='option' to='/shop'>Contact</Link>
             {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>Sign Out</div> 
                :
                <Link className='option' to='/signin'>Sign In</Link>
             }
             <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
);

const mapStateToProps = createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);