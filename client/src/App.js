import React,  {useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Auth from './Auth/Auth'
import Navigation from './Home/Navbar';
import MenuPage from './pages/RecipeSearch'
import HomePage from './pages/HomePage';
import Login from './Home/Login';
import RecipeSearch from './pages/RecipeSearch';
import NavBar from './Home/Navbar';
import Register from './Home/Register';

const AUTH = { 
  isAuthenticated: false,
};


function App() {
  const [sessionToken, setSessionToken] = useState('');
 
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
      AUTH.isAuthenticated = true;
    }
  }, [sessionToken])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
    AUTH.isAuthenticated = false;
  }
  
  const protectedViews = () => {
    return(sessionToken === localStorage.getItem('token') ? <RecipeSearch token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }
  
  return (
    <div className="App">
      {/* <MenuPage /> */}
      {/* <HomePage /> */}
      {/* <Navigation clearToken={clearToken} />
       {protectedViews()} */}
    
    <Router>
      <NavBar
      updateToken={updateToken}
      logout={clearToken}
      isLoggedIn={!!sessionToken}
      />
      <Switch>
        <Route path='/login'>
          <Login updateToken={updateToken} />
        </Route>
        <Route path='/register'>
          <Register updateToken={updateToken} />
        </Route>
        
      </Switch>
    </Router>
      
   </div> 
  );
}

export default App;

