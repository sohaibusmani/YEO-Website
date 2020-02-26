import React , {Component} from 'react';

// Assets
import evebts from '../../Assets/Images/eventsCover.jpg';

class Internship extends Component {
    render(){
        return(
            <React.Fragment>
              <div style={{backgroundImage:`url(${evebts})`,
             width: '100%',
             height: '500px',
             backgroundSize:'100% 100%'}}>
                 <div style={{position:'absolute',color:'white', top:'50%' , left:'50%', transform:'translate(-50%,-50%)'}}>
                 <h2>Internships Programs</h2> 
              </div>
               </div>
               
              
            </React.Fragment>
        )
    }
}

export default Internship ;