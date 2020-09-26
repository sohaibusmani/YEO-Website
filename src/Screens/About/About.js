import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Typography, Grid, Container } from '@material-ui/core';

// Assets
import us16 from "../../Assets/Images/us5.jpg";
import founder from '../../Assets/Images/founder.jpg'
import coFounder from '../../Assets/Images/coFounder.jpg'
import us8 from '../../Assets/Images/us8.jpg'
import supervisor from '../../Assets/Images/supervisor.jpg'
import photographer from '../../Assets/Images/photographer1.jpg'
import decorator from '../../Assets/Images/decorator.jpg'
import flourist from '../../Assets/Images/flourist.jpg'

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <React.Fragment>

                <Container maxWidth='md'>
                    <div style={{
                        backgroundImage: `url(${us16})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',

                    }}>


                    </div>
                </Container>


                <div style={{ fontFamily: 'TimesNewRoman', marginTop: '50px', color: '#AD365C', textAlign: 'center' }}>
                    <h1>Youth Event Organizer's Story</h1>
                </div>
                <div style={{ fontFamily: 'TimesNewRoman', marginTop: '50px', fontSize: '1.2rem', textAlign: 'center' }}>
                    <p><strong>This is a story of two graduate students.</strong>
                        <br />
                        They started their journey three years back "Aqsa Salam" Scholarship holder with CGPA 3.4 and " Muhammad Uzair" average student with CGPA 2.6 . They were interested in event management. They participated in university events subsequently. They got a chance to organize an event which was basically a whole class project.
                                   <br />
                                   Their journey started with the involvement of both whereby Aqsa used to design idea that how can we proceed our business and Uzair implemented those ideas  by organizing events and for that purpose, he started making contacts at different level. They use to run online and organize few events of different types than in the last semester they represented their business model where a company "Blue ocean venture" Sir Asama appreciated their efforts and invited them for startup. After graduation Aqsa got job in private bank and Uzair joined a call center based local firm. They started their MBA from Iqra University where their entrepreneurship teacher "Sir Minhaj" enforced Uzair to leave the job and start working on the business.  He suggested Uzair that he should leave the job and Aqsa have to continue their job as if these guys need any finanical help she would be helping hand for this new venture.
                                   <br />
                                   On Nov 2018, they started the business at Blue Ocean Venture and within a month they shifted their office to Iqra University main campus Oric Department. They started with zero investment  few people joined them. They faced alot of issues but they keep on working and make their market. After 9 months in July 2019, They have made investory up to 80k with numerous number of events and make a turnover of total sales up to 300k. They captured several clients through facebook and 80% events came through social media and the remaining from word of mouth and from different links. They struggled, theu faced majority of people, there were conflicts too, they handled it, they tried their best and didn't lose hope. The best part is they won startup competition from Iqra University and won a cash award worth 25k. Now they are working on some different concepts for making their success more powerful. Its a great journey with alot of struggle.
                                   <br />
                                   It proves that if you keep on struggling you will achieve the goal until and unless you have the skills.
                               </p>
                </div>

                <Container style={{ marginTop: '100px', marginBottom: '50px' }} maxWidth='lg'>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <h2 style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', color: '#AD365C', marginBottom: '50px' }}>Our Workplace</h2>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} lg={6} >
                            <img
                                alt='pic'
                                style={{
                                    width: '100%',
                                    height: '300px',
                                }} src={us8} />
                        </Grid>
                        <Grid item style={{ fontFamily: 'TimesNewRoman' }} xs={12} sm={12} lg={6} >
                            <p style={{ fontSize: '20px' }}>We specialize in Planning Weddings, Parties, Corporate Events, Social gatherings etc. Our first priority is to understand our client’s needs and provide them the best possible arrangements, while staying within their budget. We coordinate your events according to your wishes and have a complete set up of event management, farm house booking, decorations and catering. We always follow latest trends and ensure that your event is as flawless as it is memorable. With every event, we come up with breakthrough ideas by adding creative touches to make it unique. Our services are tailored to specific needs. We do as much or as little as you desire.</p>
                        </Grid>
                    </Grid>
                </Container>


                <Container maxWidth='lg'>
                    
                    <div style={{ textAlign: 'center', fontFamily: 'TimesNewRoman', color: '#AD365C', marginBottom: '50px' }}>
                    <h2>
                        Youth Event Organizer Team
                            </h2>
                            </div>
                    
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{ borderColor: '#AD365C' }}>
                                <Card.Img src={founder} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Aqsa Salam
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f',textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Founder
                                </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{ borderColor: '#AD365C' }}>
                                <Card.Img src={coFounder} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Uzair Nisar
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f',textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Co-Founder
                                </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{borderColor: '#AD365C' }}>
                                <Card.Img src={supervisor} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Ahmed
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f', textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Head Of Supervisors
                                </Typography>
                            <hr />
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={8}>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{ borderColor: '#AD365C' }}>
                                <Card.Img src={photographer} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Moiz Islam
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f',textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Photographer
                                </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{ borderColor: '#AD365C' }}>
                                <Card.Img src={flourist} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Abdul Rafey
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f',textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Flourist
                                </Typography>
                            <hr />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={4} >
                            <Card style={{borderColor: '#AD365C' }}>
                                <Card.Img src={decorator} />
                            </Card>
                            <hr />
                            <Typography variant="h4" className="text-align"
                                style={{ color: 'black',textAlign:'center', fontWeight: 'bolder', fontFamily: '"Times New Roman", Times, serif', }} >
                                Saqib
                                </Typography>
                            <Typography variant="h4" className="text-align"
                                style={{ color: '#f9f9f9f', textAlign:'center', fontSize: '2em', fontFamily: '"Times New Roman", Times, serif', }} >
                                Decorator
                                </Typography>
                            <hr />
                        </Grid>
                    </Grid>
                </Container>

                <Footer />
            </React.Fragment>
        )
    }
}
export default About;