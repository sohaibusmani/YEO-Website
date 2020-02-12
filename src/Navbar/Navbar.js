import React , {Component}   from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav , NavDropdown , Form , FormControl , Button} from 'react-bootstrap';


class SearchAppBar extends Component{
    render(){
        return(
            <React.Fragment>
               <Navbar  expand="lg">
  <Navbar.Brand href="#home">Youth Event Organizer</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Courses</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </React.Fragment>
        )
    }
}

export default SearchAppBar ;