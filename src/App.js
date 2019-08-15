import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

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
     <Route path='/signin' component={SignInAndSignUpPage}/>

     </switch>
    </div>
  );
}

export default App;
