import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';

function App() {

  const HatsPage= () =>(
    <div><h1>Hats Pages</h1></div>
  )
  
  return (
    <div>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
    </div>
  );
}

export default App;
