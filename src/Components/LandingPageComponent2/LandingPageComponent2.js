import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';
//Casecading Style Sheets
import '../../App.css';


class LandingPageComponent4 extends React.Component {

    render() {

        return (
            <Container maxWidth="md">
                <div style={{ height: 120 }} />
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4}></Grid>
                <Grid item lg={6} md={6}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                               
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{marginBottom:'40px', color: 'white', marginTop: 18, fontWeight: 'bolder', fontSize: '5em', textAlign:'center', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Operations
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{marginTop:'80px', color: '#f0f0f0f', fontWeight: 'normal', fontSize: '1em', opacity: '0.9' }} >
                                Our various art work/operations like FLORISTS The art of flowers, CRAFTERS The art of crafting clever ideas , DECORATION the art of assembling scattering things in an unbelievable way, SOUND SYSTEM The art of taking yourself in an accept able place, All these Beautiful things that made your event outlast, are done by our Passionate, Talented, Highly Motivated Youngster who are willing to explore new experience and make your event awesome/ a dream come true.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                
            </Container>
        )
    }
}

export default withRouter(LandingPageComponent4);