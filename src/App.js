import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from './Components/Navbar/Navbar';

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Screens
import LandingPage from './Screens/LandingPage/landingPage';
import About from './Screens/About/About';
import Courses from './Screens/Courses/Courses'
import Contact from './Screens/Contact/ContactUs';
import CourseDetail from './Screens/Courses/CourseDetails';
import BrandSection from './Screens/Courses/BrandSection';


function App() {
  return (
    <Router>
    <SearchAppBar/>
    
    <Switch>
      <Route path='/' exact component={()=><LandingPage/>} />
          {/* <Route path='/LandingPage' exact component={LandingPage}/> */}
          <Route path='/about' exact component={About}/>
          {/* <Route path='/Events'  component={Events}/> */}
          <Route path='/Courses' exact  component={Courses}/>
          <Route path='/Courses/CourseDetail' exact component={CourseDetail}/>
          <Route path='/Courses/BrandSection' exact component={BrandSection}/>
          <Route path='/Contact' exact  component={Contact}/>

          </Switch>
    </Router>
  );
}

export default App;
