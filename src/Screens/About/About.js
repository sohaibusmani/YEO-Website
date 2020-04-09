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
            </React.Fragment>
        )
    }
}
export default About;