import React , {Component} from 'react';

// Assets
import evebts from '../../Assets/Images/eventsCover.jpg';
import { Container } from 'react-bootstrap';

class Internship extends Component {
    render(){
        return(
            <React.Fragment>
                
              <div style={{backgroundImage:`url(${evebts})`,
             width: '100%',
             height: '500px',
             backgroundSize:'100% 100%',
             opacity:'0.7'}}>
                 <div 
                 style={{position:'absolute',
                 color:'black',
                 top:'50%' ,
                 left:'50%',
                 transform:'translate(-50%,-50%)',
                 }}>
                 <h2>Be Professional With Us</h2> 
              </div>
               </div>

               <div
                style={{marginTop:'30px', 
                fontFamily:'san-serif',
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








              
               
              


              
            </React.Fragment>
        )
    }
}

export default Internship ;