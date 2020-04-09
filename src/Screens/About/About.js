import React , {Component} from 'react';
import {Container, Row , Col} from 'react-bootstrap';

// Assets
import us16 from "../../Assets/Images/us5.jpg";

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer'

class About extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Container>
                    <div style={{
                        backgroundImage: `url(${us16})`,
                        width: '100%',
                        height: '350px',
                        backgroundSize: '100% 100%',
                        
                    }}>
                        

                    </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col style={{fontFamily:'TimesNewRoman' ,marginTop:'50px', color:'#AD365C',  textAlign:'center'}}>
                               <h1>Youth Event Organizer's Story</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{fontFamily:'TimesNewRoman' ,marginTop:'50px', fontSize:'1.2rem', textAlign:'center'}}>
                               <p><strong>This is a story of two graduate students.</strong>
                                   <br/>
                                   They started their journey three years back "Aqsa Salam" Scholarship holder with CGPA 3.4 and " Muhammad Uzair" average student with CGPA 2.6 . They were interested in event management. They participated in university events subsequently. They got a chance to organize an event which was basically a whole class project.
                                   <br/>
                                   Their journey started with the involvement of both whereby Aqsa used to design idea that how can we proceed our business and Uzair implemented those ideas  by organizing events and for that purpose, he started making contacts at different level. They use to run online and organize few events of different types than in the last semester they represented their business model where a company "Blue ocean venture" Sir Asama appreciated their efforts and invited them for startup. After graduation Aqsa got job in private bank and Uzair joined a call center based local firm. They started their MBA from Iqra University where their entrepreneurship teacher "Sir Minhaj" enforced Uzair to leave the job and start working on the business.  He suggested Uzair that he should leave the job and Aqsa have to continue their job as if these guys need any finanical help she would be helping hand for this new venture.
                                   <br/>
                                   On Nov 2018, they started the business at Blue Ocean Venture and within a month they shifted their office to Iqra University main campus Oric Department. They started with zero investment  few people joined them. They faced alot of issues but they keep on working and make their market. After 9 months in July 2019, They have made investory up to 80k with numerous number of events and make a turnover of total sales up to 300k. They captured several clients through facebook and 80% events came through social media and the remaining from word of mouth and from different links. They struggled, theu faced majority of people, there were conflicts too, they handled it, they tried their best and didn't lose hope. The best part is they won startup competition from Iqra University and won a cash award worth 25k. Now they are working on some different concepts for making their success more powerful. Its a great journey with alot of struggle.
                                   <br/>
                                   It proves that if you keep on struggling you will achieve the goal until and unless you have the skills. 
                               </p>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        )
    }
}
export default About;