import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

function App() {

  const HatsPage= () =>(
    <div><h1>Hats Pages</h1></div>
  )
  
  return (
    <div>
      <Header /> 
      <switch>
     <Route exact path='/' component={HomePage} />
     <Route path='/shop' component={ShopPage} />
     </switch>
    </div>
  );
}

export default App;
