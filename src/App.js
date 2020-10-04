import React from 'react';
import './App.css';

// Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// firebase
import firebase from './config/firebase';

// axios
import axios from 'axios';

// connection
import baseUrl from './config/api';

// navbar
import Navbar from './Components/Navbar/Navbar';

// Screens
import LandingPage from './Screens/LandingPage/landingPage';
import About from './Screens/About/About';
import Courses from './Screens/Courses/Courses'
import Contact from './Screens/Contact/ContactUs';
import CourseDetail from './Screens/Courses/CourseDetails';
import BrandSection from './Screens/Courses/BrandSection';
import Internship from './Screens/Courses/Internship';
import Packages from './Screens/Packages/Packages';
import PackageDetails from './Screens/Packages/Components/PackageDetails';
import Chat from './Screens/Chat/Chat';
import Events from './Screens/Events/Events';
import Signin from './Components/Login/Signin';
import Signup from './Components/Register/Signup';
import BreakupPackage from './Screens/BreakupPackages/BreakupPackages';

// router
import { withRouter } from 'react-router-dom';



class App extends React.Component {

  state = {
    user: null,
    userEmail: null,
    userId: '',
    isUserLoggedIn: false,
    showLoginButton: false,
    displayName: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      let uId = '';
      let usrEmail = '';
      if (user) {
        uId = firebase.auth().currentUser.uid;
        usrEmail = firebase.auth().currentUser.email;
        this.setState({
          user: uId,
          userEmail: usrEmail
        });
        console.log('User Logged in');
        axios({
          url: `${baseUrl}/user/get-current-user?firebaseId=${uId}`,
          method: 'GET',
        })
          .then(response => {
            console.log(response.data);
            this.setState({
              isUserLoggedIn: true,
              data: response.data.data,
              userId: response.data.data._id,
            })
          })
          .catch(err => {
            console.log(err);
          })
      }
      else {
        this.setState({
          userEmail: null,
          user: null
        });
        console.log('User not logged in')
      }

    })
  }

  render() {
    const { user, userId } = this.state;
    return (
      <React.Fragment>
        <Navbar {...this.props} user={user} />

        {/* <SearchAppBar/> */}

        <Switch>
          <Route path='/' exact render={
            props => (<LandingPage {...props} />
            )} />
          {/* <Route path='/LandingPage' exact component={LandingPage}/> */}
          <Route path='/About' exact render={
            props => (<About {...props} />
            )} />
          {/* <Route path='/Events'  component={Events}/> */}
          <Route path='/Courses' exact render={
            props => (<Courses />
            )} />
          <Route path='/Courses/CourseDetail' exact render={
            props => (<CourseDetail {...props} />
            )} />
          <Route path='/Courses/BrandSection' exact render={
            props => (<BrandSection {...props} />
            )} />
          <Route path='/Courses/Internship' exact render={
            props => (<Internship {...props} />
            )} />
          <Route path='/Contact' exact render={
            props => (<Contact {...props} />
            )} />
          <Route path='/Packages' exact render={
            props => (<Packages {...props} />
            )} />
          <Route path='/Packages/PackageDetails/:id' exact render={
            props => (<PackageDetails {...props} userId={userId} />
            )} />
          <Route path='/Inbox' exact render={
            props => (<Chat {...props} />
            )} />
          <Route path='/Events' exact render={
            props => (<Events {...props} />
            )} />
          <Route path='/signin' exact render={
            props => (<Signin {...props} />
            )} />
          <Route path='/signup' exact render={
            props => (<Signup {...props} />
            )} />
          <Route path='/breakup-package' exact render={
            props => (<BreakupPackage {...props} userId={userId} />
            )} />


        </Switch>

      </React.Fragment>
    )
  }
}

// export default withRouter(withStyles(styles)(App));
export default withRouter(App);
