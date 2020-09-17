import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Hotel from './components/Hotel/Hotel';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext= createContext();
function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
    <Router>
     
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/booking/:destination">
          <Booking></Booking>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/hotel">
          <Hotel/>
        </Route>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
