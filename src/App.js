import React from 'react';
import { Route  } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';
import Header from  './components/header/header';
import HomePage from './pages/homepage/homepage'; 
import ShopPage from './pages/shop/shop'; 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userActions';

class App extends React.Component {

      unsubscribeFromAuth = null;  

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
          
          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
              setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
                  
              
              
            });
            
    }
          else{
            setCurrentUser(userAuth)
          }

        })
    }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
        return (
          <div>
            <Header/>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
          </div>
        );
  }
}

const mapDispatchtoProps = dispatch => ({
      setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchtoProps)(App);
