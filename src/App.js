import React , {useEffect} from 'react';
import { Route , Redirect  } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import './App.scss';
import Header from  './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import CheckoutPage from "./pages/checkout/checkout";
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';


import { selectCurrentUser } from "./redux/user/selectors";
import {checkUserSession} from './redux/user/actions';


import { GlobalStyle } from './global.styles'

const App = ({checkUserSession , currentUser}) =>  {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
    
    
    //this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {

      //    if(userAuth){
        //    const userRef = await createUserProfileDocument(userAuth);

          //  userRef.onSnapshot(snapShot => {
            //  setCurrentUser({
              //id:snapShot.id,
              //...snapShot.data()
            //})
            //});
    //}
          //else{
          //  setCurrentUser(userAuth)
        //  }

          

      //  })


        return (
          <div>
            <GlobalStyle />
            <Header/>
            <Route exact path='/' component={HomePage} />
            <Route  path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />
            <Route exact path='/checkout' component={CheckoutPage} />
          </div>
        );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
