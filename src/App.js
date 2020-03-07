import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect , withRouter} from 'react-router-dom';

// Screens
import LandingPage from './Screens/LandingPage/landingPage';
import About from './Screens/About/About';
import Courses from './Screens/Courses/Courses'
import Contact from './Screens/Contact/ContactUs';
import CourseDetail from './Screens/Courses/CourseDetails';
import BrandSection from './Screens/Courses/BrandSection';
import Internship from './Screens/Courses/Internship';
import Packages from './Screens/Packages/Packages';
import WeddingPackages from './Screens/Packages/Components/WeddingPackages';

const styles = (theme => {
  
})


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
         <Router>
    {/* <SearchAppBar/> */}
    
    <Switch>
      <Route path='/' exact component={()=><LandingPage/>} />
          {/* <Route path='/LandingPage' exact component={LandingPage}/> */}
          <Route path='/about' exact component={About}/>
          {/* <Route path='/Events'  component={Events}/> */}
          <Route path='/Courses' exact  component={Courses}/>
          <Route path='/Courses/CourseDetail' exact component={CourseDetail}/>
          <Route path='/Courses/BrandSection' exact component={BrandSection}/>
          <Route path='/Courses/Internship' exact component={Internship}/>
          <Route path='/Contact' exact  component={Contact}/>
          <Route path='/Packages' exact  component={Packages}/>
          

          </Switch>
    </Router>
      </React.Fragment>
    )
  }
}

// export default withRouter(withStyles(styles)(App));
export default App;
