import React from 'react';
import { Route , Link } from 'react-router-dom';

import './App.css';
import Header from  './components/header/header';
import HomePage from './pages/homepage/homepage'; 
import ShopPage from './pages/shop/shop'; 


function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
