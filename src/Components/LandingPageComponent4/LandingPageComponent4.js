import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
//React Router
import { withRouter } from 'react-router-dom';
//Casecading Style Sheets
import '../../App.css';
import { GoPerson } from 'react-icons/go';


class LandingPageComponent4 extends React.Component {

    render() {

        return (
            <Container maxWidth="md">
                <div style={{ height: 120 }} />
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2} md={2} sm={12}>
                                    <GoPerson style={{ fontSize: '5em' }} />
                                </Grid>
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{ color: 'white', marginTop: 18, fontWeight: 'bolder', fontSize: '1.5em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Syed Azib Ali
                                    </Typography>
                                    <Typography variant="h4"
                                        style={{ color: '#6195FF', marginTop: 7, fontWeight: 'bolder', fontSize: '1.2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Giverpays
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{ color: '#f0f0f0f', fontWeight: 'normal', fontSize: '1.1em', opacity: '0.9' }} >
                                    Was great to work with TechNest, good communication and very good
                                    technical understanding of the features/bug fix. I highly recommend TechNest as
                                    they would be a good asset for web development
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2} md={2} sm={12}>
                                    <GoPerson style={{ fontSize: '5em', borderColor:'black' }} />
                                </Grid>
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{ color: 'white', marginTop: 18, fontWeight: 'bolder', fontSize: '1.5em', fontFamily: '"Montserrat", sans-serif', }} >
                                        Syed Azib Ali
                                    </Typography>
                                    <Typography variant="h4"
                                        style={{ color: '#6195FF', marginTop: 7, fontWeight: 'bolder', fontSize: '1.2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Giverpays
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{ color: '#f0f0f0f', fontWeight: 'normal', fontSize: '1.1em', opacity: '0.9' }} >
                                    Was great to work with TechNest, good communication and very good
                                    technical understanding of the features/bug fix. I highly recommend TechNest as
                                    they would be a good asset for web development
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