import React , {Component}   from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav , NavDropdown , Form , FormControl , Button} from 'react-bootstrap';


class SearchAppBar extends Component{
    render(){
        return(
            <React.Fragment>
               <Navbar style={{backgroundColor:'#ff0083'}} expand="lg">
  <Navbar.Brand href="#home">Youth Event Organizer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/LandingPage">Home</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <NavDropdown  title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item style={{color:'#ff0083'}} href="/Events">Events</NavDropdown.Item>
        <NavDropdown.Item style={{color:'#ff0083'}} href="/Courses">Courses</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button style={{borderColor:'white', color:'white' , backgroundColor:'#ff0083'}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        )
    }
}

export default SearchAppBar ;