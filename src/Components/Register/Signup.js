import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

//firebase 
import firebase from '../../config/firebase';
import  baseUrl  from '../../config/api';

//Axios
import axios from 'axios';

//Sweet Alerts
import swal from 'sweetalert2';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://technest-pk.github.io/">
        TechNest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Register extends React.Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }

  userRegistration = () => {
    const {
      firstName,
      lastName,
      email,
      password
    }
    =this.state;

    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      axios({
        url:`${baseUrl}/user/user-register`,
        method:'POST',
        data:{
          fullName : firstName + ' ' + lastName,
          email,
          password,
          firebaseId: firebase.auth().currentUser.uid,
        }
      })
      .then(res => {
        swal.fire({
          icon:'success',
          title:'Registered Successfully'
        })
        .then(()=>window.location.replace('/'))
      })
      .catch(err => {
        swal.fire({
          icon:'error',
          title:'Internal Server Error'
        });
      });
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      swal.fire({
        icon:'error',
        title:errorCode || 'Something Went Wrong',
        text:errorMessage
      });
    });
  }

  render(){
    const {firstName , lastName , email, password} = this.state;
    const {classes} = this.props;
    return(
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e => { this.setState({ firstName: e.target.value })}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => { this.setState({ lastName: e.target.value }); }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => { this.setState({ email: e.target.value }); }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => { this.setState({ password: e.target.value }); }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.userRegistration}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
 
    )
  }
}

export default withStyles(styles)(Register);