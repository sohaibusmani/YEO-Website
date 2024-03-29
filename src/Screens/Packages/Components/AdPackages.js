import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Typography,Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


// axios
import axios from 'axios';

// connection string
import baseUrl from '../../../config/api';

// swal
import swal from 'sweetalert2';

// Components
import Navbar from '../../../Components/Navbar/Navbar'
import Footer from '../../../Components/Footer/Footer'

// Assets
import logo from '../../../Assets/Images/mehendi.webp'
import logo1 from '../../../Assets/Images/birthday.jpg'
import Photography from '../../../Assets/Images/Photography.jpg'
import pcover from '../../../Assets/Images/packages.jpg'
import qawwali from '../../../Assets/Images/qawwali.jpg'

const styles = {
    button: {
        backgroundColor: 'white',
        color: '#AD365C',
        borderColor: '#AD365C !important',
        '&:hover': {
            backgroundColor: '#AD365C',
            borderColor: '#AD365C',

        },
    }
}
//         marginBottom: '10px',
//     },
//     notchedOutline: {
//         borderColor: '#AD365C',
//     },
//     focused: {
//         "& $notchedOutline": {
//             borderColor: '#AD365C !important',
//         }
//     },
// };

class AdPackages extends React.Component {
    state = {
        allPackages: []
    }

    componentDidMount() {
        this.getAllPackages();
        window.scrollTo(0, 0);
    }

    getAllPackages = () => {
        axios({
            url: `${baseUrl}/package/get-packages`,
            method: 'GET',
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    allPackages: response.data,
                    pictures: response.data.pictures
                })
            })
            .catch(err => {
                console.log(err);
                swal.fire({
                    icon: 'error',
                    title: err,

                })
            })
    }

    render() {
        const { classes } = this.props;
        const {allPackages} = this.state;
        return (
            <React.Fragment>

                <Container>
                    <div style={{
                        backgroundImage: `url(${pcover})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>


                    </div>
                </Container>

                <Container maxWidth='lg'>

                <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                     
                <Grid container>
                <Grid container spacing={3}>
                  {allPackages.length > 0 && 
                   allPackages.map((val, index) => {
                     return(
                        
                            
                            <Grid item xs={12} lg={6} >
                                <Card style={{marginBottom:'5rem', borderColor: '#AD365C' }}>
                                    <Card.Header style={{ backgroundColor: '#AD365C', color: 'white' }}>
                                        <Card.Title>
                                            {val.title}
                         </Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col lg={8} md={8} sm={12}>
                                                    <Card.Img variant='top' style={{maxHeight:'250px'}} src={val.pictures.length > 0 ? val.pictures[0] : Photography} />
                                                </Col>
                                                <Col lg={4} md={4} >
                                                    <h4>Package Price</h4>
                                                     <Typography>
                                                        PKR {val.price}
                                                     </Typography>
                                                </Col>
                                            </Row>
                                            <hr />
                                            <Row>
                                                <Col lg={3} md={3}>
                                                </Col>
                                                <Col >
                                                    <Link to={`/Packages/PackageDetails/${val._id}`} style={{ textDecoration: 'none' }}>
                                                        <Button className={classes.button} block>View Details</Button>
                                                    </Link>
                                                </Col>
                                                <Col></Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Grid>
                            
                    
                     )
                   }) }
                   </Grid>
                   </Grid>
                </div>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AdPackages);