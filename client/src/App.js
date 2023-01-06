import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import { BrowserRouter,Route } from "react-router-dom"; //marked
function App() {
  return (
    <div className="App">

      <BrowserRouter>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/bookingCar' exact component={BookingCar} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
