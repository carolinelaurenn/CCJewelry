import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Earrings from './Earrings';
import Necklaces from './Necklaces';
import Bracelets from './Bracelets';
import SignUp from './SignUp';
import { Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className="Title">CC JEWELRY</h1>
          <div className="Link-line">
             <Link to="/" className="App-link">Home</Link>
             <Link to="/aboutus" className="App-link">About Us</Link>
             <Link to="/necklaces" className="App-link">Necklaces</Link>
             <Link to="/bracelets" className="App-link">Bracelets</Link>
             <Link to="/earrings" className="App-link">Earrings</Link>
             <Link to="/contactus" className="App-link">Contact Us</Link>
             <Link to="/signup" className="App-link">Sign Up</Link>
        </div>
      </header>
    </div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/contactus" component={ContactUs}/>
      <Route exact path="/earrings" component={Earrings}/>
      <Route exact path="/necklaces" component={Necklaces}/>
      <Route exact path="/bracelets" component={Bracelets}/>
      <Route exact path="/signup" component={SignUp}/>

    </Router>
  );
}

export default App;
