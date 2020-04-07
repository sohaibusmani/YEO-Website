import React from 'react';
import styled from "@emotion/styled/macro";
import { Grid,Typography } from "@material-ui/core";
import { GoPerson } from 'react-icons/go';



// Assets
import us20 from '../../Assets/Images/us21.jpg';

const DisplayOver = styled.div({
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
    });
    
    const Background = styled.div({
        position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: '100%',
        maxHeight: '100%',
        color: 'white',
    });
    

class LandingPageComponent4 extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div style={{marginTop:'100px', marginBottom:'100px'}}>
                    <Grid container  spacing={2}>
                       <Grid item lg={4} md={4} ></Grid>
                       <Grid item lg={6} md={6} >
                           <Typography variant="h1"
                           style={{ color: 'black',marginBottom: 18, marginTop: 50, fontWeight: 'bolder', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                            Words From Our Clients
                           </Typography>
                       </Grid>
                    </Grid>
                    
                <Grid container spacing={2}>
                    <Grid item lg={4} md={4}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2} md={2} sm={12}>
                                    <GoPerson  style={{ fontSize: '5em' }} />
                                </Grid>
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{ color: 'black', marginTop: 18, fontWeight: 'bolder', fontSize: '1.5em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Syed Azib Ali
                                    </Typography>
                                    <Typography variant="h4"
                                        style={{ color: '#AD365C', marginTop: 7, fontWeight: 'bolder', fontSize: '1.2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Giverpays
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{ color: 'black', textAlign:'center', fontWeight: 'normal', fontSize: '1.1em', opacity: '0.9' }} >
                                    Was great to work with TechNest, good communication and very good
                                    technical understanding of the features/bug fix. I highly recommend TechNest as
                                    they would be a good asset for web development
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2} md={2} sm={12}>
                                    <GoPerson style={{ fontSize: '5em' }} />
                                </Grid>
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{ color: 'black', marginTop: 18, fontWeight: 'bolder', fontSize: '1.5em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Syed Azib Ali
                                    </Typography>
                                    <Typography variant="h4"
                                        style={{ color: '#AD365C', marginTop: 7, fontWeight: 'bolder', fontSize: '1.2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Giverpays
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{ color: 'black', textAlign:'center', fontWeight: 'normal', fontSize: '1.1em', opacity: '0.9' }} >
                                    Was great to work with TechNest, good communication and very good
                                    technical understanding of the features/bug fix. I highly recommend TechNest as
                                    they would be a good asset for web development
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4}>
                        <div className="client-info" style={{ padding: 10 }}>
                            <Grid container spacing={1}>
                                <Grid item lg={2} md={2} sm={12}>
                                    <GoPerson style={{ fontSize: '5em' }} />
                                </Grid>
                                <Grid item lg={10} md={10} sm={12}>
                                    <Typography variant="h4"
                                        style={{ color: 'black', marginTop: 18, fontWeight: 'bolder', fontSize: '1.5em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Syed Azib Ali
                                    </Typography>
                                    <Typography variant="h4"
                                        style={{ color: '#AD365C', marginTop: 7, fontWeight: 'bolder', fontSize: '1.2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                        Giverpays
                                    </Typography>
                                </Grid>
                            </Grid>
                            <div style={{ height: 10 }} />
                            <div>
                                <Typography variant="p" style={{ color: 'black', textAlign:'center', fontWeight: 'normal', fontSize: '1.1em', opacity: '0.9' }} >
                                    Was great to work with TechNest, good communication and very good
                                    technical understanding of the features/bug fix. I highly recommend TechNest as
                                    they would be a good asset for web development
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                    </div>
            </React.Fragment>
        )
    }
}

export default LandingPageComponent4;