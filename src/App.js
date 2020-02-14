import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './Components/Navbar/Navbar';

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Screens
import LandingPage from './Screens/LandingPage/landingPage';
import About from './Screens/About/About';
import Events from './Screens/Services/Events/Events';
import Courses from './Screens/Services/Courses/Courses';
import Contact from './Screens/Contact/ContactUs';


function App() {
  return (
    <Router>
    <SearchAppBar/>
    
    <Switch>
      <Route path='/' exact component={()=><LandingPage/>} />
          {/* <Route path='/LandingPage' exact component={LandingPage}/> */}
          <Route path='/about' exact component={About}/>
          <Route path='/Events'  component={Events}/>
          <Route path='/Courses' exact  component={Courses}/>
          <Route path='/Contact' exact  component={Contact}/>

          </Switch>
    </Router>
  );
}

export default App;
