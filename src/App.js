import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  exact path="/login" component={LoginPage}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
