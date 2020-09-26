import React from 'react';
import { Container, Grid } from '@material-ui/core';
import {Card, Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

// Assets
import us14 from '../../Assets/Images/eventsCover.jpg';
import us17 from '../../Assets/Images/us17.jpg';
import mehendi from '../../Assets/Images/mehendi.jpg';
import qawwali from '../../Assets/Images/qawwalievent.jpg';
import marmaid from '../../Assets/Images/marmaid.jpg';
import bossbaby from '../../Assets/Images/bossbaby.jpg';
import redblack from '../../Assets/Images/redblack.jpg';
import multicolor from '../../Assets/Images/multicolor.jpg';


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

class Events extends React.Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }
  
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                
                <Container>
                    <div style={{
                        backgroundImage: `url(${us14})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>


                    </div>
                </Container>
                <Container maxWidth='md'>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={3}>
                        </Grid>
                        <Grid item xs={12} lg={6}  style={{ fontFamily: 'TimesNewRoman', marginTop: '50px', textAlign: 'center' }}>
                            <h1>Welcome to YEO Events</h1>
                            <hr />

                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        {/* <Container style={{ marginTop: '100px', marginBottom: '50px' }} fluid> */}
                            {/* <Row> */}
                                <Grid item sm={12} lg={6}>
                                    <img 
                                    alt='pic'
                                    style={{
                                        width: '100%',
                                        height: '600px',
                                    }} src={us17} />
                                </Grid>
                                <Grid item style={{ fontFamily: 'TimesNewRoman' }} sm={12} lg={6}>
                                    <h2 style={{ textAlign: 'center' }}>Here at Youth Event Organizer</h2>
                                    <br />
                                    <br />
                                    <p style={{ fontSize: '20px' }}>We specialize in Planning Weddings, Parties, Corporate Events, Social gatherings etc. Our first priority is to understand our client’s needs and provide them the best possible arrangements, while staying within their budget. We coordinate your events according to your wishes and have a complete set up of event management, farm house booking, decorations and catering. We always follow latest trends and ensure that your event is as flawless as it is memorable. With every event, we come up with breakthrough ideas by adding creative touches to make it unique. Our services are tailored to specific needs. We do as much or as little as you desire.</p>
                                </Grid>
                            {/* </Row> */}
                        {/* </Container> */}
                    </Grid>
                    <Grid container>
                    <Grid item xs={12} lg={4}>
                        </Grid>
                        <Grid item xs={12} lg={4} style={{ fontFamily: 'TimesNewRoman', marginTop: '50px', textAlign: 'center' }}>
                          
                          <h1>Our Portfolio</h1>
                          
                        </Grid>
                    </Grid>
                    <Grid container spacing={6} style={{marginTop:"5rem"}}>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={mehendi} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Mehendi </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button  className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={qawwali} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Qawwali</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={bossbaby}/>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Boss baby Theme</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                 </Grid>

                 <Grid container spacing={6} style={{marginTop:"5rem"}}>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={redblack} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Red and Black Theme </Card.Title>
    <Card.Text>
    This popular event course guides you through each step so you become a certified event planner!
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button  className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={marmaid} />
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Marmaid Theme</Card.Title>
    <Card.Text>
    Accelerate your learning in sales & marketing and business development too.
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                     <Grid item xs={12} lg={4}>
                     <Card>
  <Card.Img variant="top" src={multicolor}/>
  <Card.Body style={{textAlign:'center'}}>
    <Card.Title>Multicolor Theme</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Link to='/Packages' style={{textDecoration:'none'}}>
    <Button className={classes.button} block>Book Now</Button>
    </Link>
  </Card.Body>
</Card>
                     </Grid>
                 </Grid>
                 
                </Container>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Events);