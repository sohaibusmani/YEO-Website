import React , {Component} from 'react';

// Assets
import evebts from '../../Assets/Images/us7.jpg';
import { Container } from 'react-bootstrap';

// Components
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";

class Internship extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Container>
              <div style={{backgroundImage:`url(${evebts})`,
             width: '100%',
             height: '350px',
             backgroundSize:'100% 100%',
             }}>
            
               </div>
               </Container>
               <div
                style={{marginTop:'30px', 
                fontFamily:'TimesNewRoman',
                fontSize:'20px',
                textAlign:'center' }}>
                    <h1>Internships at YEO</h1>
                    <br/>
                    <p>The complete How to Be an Event Planner course is delivered to you inside our member's portal. This system is designed to help keep you organized, focused and learning. You can pause, rewind and watch the trainings as much and as often as you like. 

Once you invest, you'll have access to the entire course which includes everything you'll need from your budget templates, to marketing ideas, to your site inspection checklists, and so much more. </p>
<br/>
<h1>How to Apply</h1>
                    <br/>
                    <p>The complete How to Be an Event Planner course is delivered to you inside our member's portal. This system is designed to help keep you organized, focused and learning. You can pause, rewind and watch the trainings as much and as often as you like. 

Once you invest, you'll have access to the entire course which includes everything you'll need from your budget templates, to marketing ideas, to your site inspection checklists, and so much more. </p>

              
               </div>








              
               
              

<Footer/>
              
            </React.Fragment>
        )
    }
}

export default Internship ;