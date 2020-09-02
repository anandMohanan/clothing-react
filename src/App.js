import React from 'react';
import { Route , Link } from 'react-router-dom';

import './App.css';
import Header from  './components/header/header';
import HomePage from './pages/homepage/homepage'; 
import ShopPage from './pages/shop/shop'; 
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      currentUser: null
    }
  }

      unsubscribeFromAuth = null;  

  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth => {
          
          if(userAuth){
            const userRef = await createUserProfileDocument(userAuth);

            userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              });
              
            });
            
          }
          else{
            this.setState({currentUser:userAuth})
          }

        })
    }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
        return (
          <div>
            <Header currentUser={this.state.currentUser} />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignUp} />
          </div>
        );
  }
}

export default App;
