import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'

function App() {

  const HatsPage= () =>(
    <div><h1>Hats Pages</h1></div>
  )
  
  return (
    <div>
     <Route exact path='/' component={HomePage} />
     <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
